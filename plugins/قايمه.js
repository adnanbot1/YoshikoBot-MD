let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎗️ قـائـمـة الـاوامــر🎗️*'
            },
            body: {
              text: '🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس عليا',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                          {
                            header: '☘️ قـسـم الاوامر',
                            title: '.menu',
                            description: '',
                            id: '.menu'
                          },
                          {
                            header: '☘️ قـسـم الـجروب',
                            title: '.اوامر_الجروب',
                            description: '',
                            id: 'اوامر_الجروب'
                          },
                          {
                            header: '☘️ قـسـم الـسرعه',
                            title: '.بينج',
                            description: '',
                            id: '.بينج'
                          },
                          {
                            header: '☘️ قـسـم الـترفيه',
                            title: '.اوامر_الترفيه',
                            description: '',
                            id: 'اوامر_الترفيه'
                          },
                          {
                            header: '☘️ قـسـم الـتحويل',
                            title: '.اوامر_التحويل',
                            description: '',
                            id: 'اوامر_التحويل'
                          },
                          {
                            header: '☘️ قـسـم الـدين',
                            title: '.اوامر_الدين',
                            description: '',
                            id: 'اوامر_الدين'
                          },
                          {
                            header: '☘️ كل الاوامر',
                            title: '.اوامر',
                            description: '',
                            id: 'اوامر'
                          },
                          {
                            header: ' ☘️قـسـم الـصوتيات',
                            title: '.اوامر_الصوتيات',
                            description: '',
                            id: 'اوامر_الصوتيات'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القائمة', 'القائمه']

export default handler
