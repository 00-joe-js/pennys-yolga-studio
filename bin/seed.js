#!/usr/bin/env node
const { db, Position } = require('../server/db');

const seed = async () => {
  await db.sync({ force: true });

  await Position.create({
    referencePhoto: "pray.jpg",
    name: "Pizza Tower Pose",
    description: `Have you ever seen your daddy eat a nice, nice slice of pizza and you wanna be like "Dad, please can I have some of your pizza?" Well, it's a yolga pose too. I don't make the rules. Well, I do actually.`
  });

  await Position.create({
    referencePhoto: "lobster.jpg",
    name: "Lobster Pose",
    description: `What's more flexible than a fish? A crustacean. Get your mat out for this one and stretch your back like a lobster would. Put rubber bands on your paws if you are doing your yolga with someone else. There is no fussin in my studio. YOU AGREED`
  });

  await Position.create({
    referencePhoto: "slep.jpg",
    name: "Leg Curlies",
    description: `Climb into your best friend's lap and curly your leggies around their leggies. It's okay to close your eyes a little but DO NOT FALL ASLEEP. This is not a picture of me sleeping. Ok?`
  });

  await Position.create({
    referencePhoto: "sweet_juicy_sun.jpg",
    name: "Basky Wasky",
    description: `There is a great ball of fire in the sky and it is the source of all life on this planet, including the sweet potatos. Lift your face towards the sun and fill it with sweet potatoes. Optionally, you can do a little smile like this :3`
  });

  db.close();
  console.log(`Seeding successful~`);
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
