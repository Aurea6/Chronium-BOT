const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');



module.exports = {
    pagination: async (options) => {
      const defaultEmojis = {
          first: "⏮️",
          previous: "⏪",
          next: "⏩",
        pageTravel: "#️⃣",
          last: "⏭️",
          
      };

      const defaultStyles = {
          first: "PRIMARY",
          previous: "PRIMARY",
          next: "PRIMARY",
          last: "PRIMARY",
          pageTravel: "SUCCESS"
      };
        let {
          message,
          author,
          channel,
          embeds,
          button,
          time,
          max,
          customFilter,
          fastSkip,
          resetTimerOnClick,
          pageTravel
        } = options;
        let currentPage = 0;

        const getButtonData = (name) => {
          return button.find((btn) => btn.name === name);
        };

        if(!author && message) author = message.author
        if(!channel && message) channel = message.channel

        let customButton;

        if(button) {
          button.forEach((value) => {
            if(value.style) {
              defaultStyles[value.name] = value.style
            }
            if(value.emoji) {
              defaultEmojis[value.name] = value.emoji
            }
          })
        }

        embeds.forEach((embed, page)=> {
          let currentFooter = embed.footer
          if(currentFooter && currentFooter.text) {
            embed.setFooter(`${embed.footer.text} - Page ${page + 1} of ${embeds.length}`, embed.footer.iconURL)
          } else {
            embed.setFooter(`Page ${page + 1} of ${embeds.length}`)
          }
        })

        let createButton = (id) => {
          return new MessageButton()
          .setStyle(defaultStyles[id])
          .setEmoji(defaultEmojis[id])
          .setCustomId(id)
        }

        let first = createButton('first')
        let previous = createButton('previous')
        let next = createButton('next')
        let last = createButton('last')
        let travel = createButton('pageTravel')

        let buttons = [
          previous.setDisabled(false), 
          next.setDisabled(false)
        ]

        let row = new MessageActionRow()
        .addComponents(buttons)

        let lastPageRowButtons = [
          previous.setDisabled(false), 
          next.setDisabled(true)
        ]

        let lastPageRow = new MessageActionRow()
        .addComponents(lastPageRowButtons)

        let disabledRowButton = [
          previous.setDisabled(true),
          next.setDisabled(true)
        ]

        let disabledRow = new MessageActionRow()
        .addComponents(disabledRowButton)

        let firstPageRowButtons = [
          previous.setDisabled(true), 
          next.setDisabled(false)
        ]

        let firstPageRow = new MessageActionRow()
        .addComponents(firstPageRowButtons)

        if(fastSkip == true) {
          buttons = [
            first.setDisabled(false), 
            previous.setDisabled(false), 
            next.setDisabled(false), 
            last.setDisabled(false)
          ]

          row = new MessageActionRow()
          .addComponents(buttons)

          lastPageRowButtons = [
            first.setDisabled(false), 
            previous.setDisabled(false), 
            next.setDisabled(true), 
            last.setDisabled(true)
          ]

          lastPageRow = new MessageActionRow()
          .addComponents(lastPageRowButtons)

          disabledRowButton = [
            first.setDisabled(true),
            previous.setDisabled(true),
            next.setDisabled(true),
            last.setDisabled(true)
          ]

          disabledRow = new MessageActionRow()
          .addComponents(disabledRowButton)

          firstPageRowButtons = [
            first.setDisabled(true), 
            previous.setDisabled(true), 
            next.setDisabled(false), 
            last.setDisabled(false)
          ]

          firstPageRow = new MessageActionRow()
          .addComponents(firstPageRowButtons)

        }

        if(pageTravel == true) {
          buttons = [
            first.setDisabled(false), 
            previous.setDisabled(false), 
            travel.setDisabled(false),
            next.setDisabled(false), 
            last.setDisabled(false),
            
          ]

          row = new MessageActionRow()
          .addComponents(buttons)

          lastPageRowButtons = [
            first.setDisabled(false), 
            previous.setDisabled(false), 
            next.setDisabled(true), 
            last.setDisabled(true),
            travel.setDisabled(false)
          ]

          lastPageRow = new MessageActionRow()
          .addComponents(lastPageRowButtons)

          firstPageRowButtons = [
            first.setDisabled(true), 
            previous.setDisabled(true), 
            next.setDisabled(false), 
            last.setDisabled(false),
            travel.setDisabled(false)
          ]

          firstPageRow = new MessageActionRow()
          .addComponents(firstPageRowButtons)

          disabledRowButton = [
            first.setDisabled(true),
            previous.setDisabled(true),
            next.setDisabled(true),
            last.setDisabled(true),
            travel.setDisabled(true)
          ]

          disabledRow = new MessageActionRow()
          .addComponents(disabledRowButton)
        }

        let sentMsg = await channel.send({embeds: [embeds[0]], components: [embeds.length > 1 ? firstPageRow : disabledRow]})

        let filter = customFilter ? customFilter : author.id

        if(!time) time = 0
        if(!max) max = 0
        let idle = 0
        if(resetTimerOnClick && resetTimerOnClick == true) {
          idle = time
          time = 0
        }

        const collector = sentMsg.createMessageComponentCollector({
          time: time,
          max: max,
          idle: idle
        })

        collector.on('collect', i => {
          if(resetTimerOnClick && resetTimerOnClick == true) {
            collector.resetTimer({ time: time }) 
          }
          const id = i.customId
          let clicker = i.user.id
          if(clicker !== filter) return i.reply({
            content: "This is not for you!",
            ephemeral: true
          })
          if(id == 'next') {
            
            currentPage++
            if(currentPage !== embeds.length -1) {
              return i.update({
              embeds: [embeds[currentPage]],
              components: [row]
            })
            } else {
              return i.update({
                embeds: [embeds[currentPage]],
                components: [lastPageRow]
              })
            }
          }
          if(id == 'previous') {
            currentPage--
            if(currentPage !== 0) {
              return i.update({
              embeds: [embeds[currentPage]],
              components: [row]
            })
            } else {
              return i.update({
                embeds: [embeds[currentPage]],
                components: [firstPageRow]
              })
            }
          }
          if(id == 'first') {
            currentPage = 0
            return i.update({
              embeds: [embeds[currentPage]],
              components: [firstPageRow]
            })
          }
          if(id == 'last') {
            currentPage = embeds.length -1
            return i.update({
              embeds: [embeds[currentPage]],
              components: [lastPageRow]
            })
          }

          if(id == 'pageTravel') {
            const numberTravel = async () => {
                const collector = channel.createMessageCollector({
                    filter: (msg) => msg.author.id === i.user.id,
                    time: 30000,
                    max: 1
                });
                const numberTravelMessage = await i.reply({
                      content: `Type the page you want to travel! You have 30s. type \`cancel\` or \`stop\` to end`,
                      ephemeral: true
                    }
                );

                collector.on("collect", (message) => {
                    if (message.content.toLowerCase() === "cancel" || message.content.toLowerCase() === "stop") {
                        message.delete().catch(() => {});
                        return collector.stop();
                    }
                    message.delete().catch(() => {});
                    const int = parseInt(message.content);
                    if (isNaN(int) || !(int-1 < embeds.length) || !(int >= 1)) return;
                    currentPage = int-1;
                    if(currentPage == 1) {
                        return sentMsg.edit({
                          embeds: [embeds[currentPage]],
                          components: [firstPageRow]
                        })
                      }
                      if(currentPage == embeds.length-1) {
                        return sentMsg.edit({
                          embeds: [embeds[currentPage]],
                          components: [lastPageRow]
                        })
                      }
                      if(currentPage !== 1 || currentPage == embeds.length-1) {
                        return sentMsg.edit({
                          embeds: [embeds[currentPage]],
                          components: [row]
                        })
                      }
                });
            };
            return numberTravel()
          }
        })

        collector.on('end', i => {
          sentMsg.edit({components: [disabledRow]}).catch(() => {})
        })
    }
};