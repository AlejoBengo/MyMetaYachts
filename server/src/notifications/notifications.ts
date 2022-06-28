/*NEW USER*/
const WelcomeMessage = (to: string, username: string) => {
   return {
      from: '. . . . . . . . .',
      to: `${to}`,
      subject: '¡. . . . . . . . .!',
      text: `Hi ${username}! . . . . . . . . ..`,
   };
};

module.exports = { WelcomeMessage };
