'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Sam",
          lastName: "Gamgee",
          email: "sam@sam.com",
          password: bcrypt.hashSync("sam", 10),
          imageUrl: "https://openpsychometrics.org/tests/characters/test-resources/pics/LOTR/5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Frodo",
          lastName: "Baggins",
          email: "frodo@frodo.com",
          password: bcrypt.hashSync("frodo", 10),
          imageUrl: "https://i2.wp.com/a1.ec-images.myspacecdn.com/images01/20/849847696a4b587b3e848eddd93c207e/l.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bilbo",
          lastName: "Baggins",
          email: "bilbo@bilbo.com",
          password: bcrypt.hashSync("bilbo", 10),
          imageUrl: "https://phantom-elmundo.unidadeditorial.es/1756b0b5c3637cea902b4336ef4bef62/crop/118x0/952x556/f/webp/assets/multimedia/imagenes/2020/06/19/15925787141337.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Pippin",
          lastName: "Took",
          email: "pippin@pippin.com",
          password: bcrypt.hashSync("pippin", 10),
          imageUrl: "https://static.wikia.nocookie.net/pjhobbitlotr/images/8/86/PippinBoyd.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
