Production.destroy_all
CrewMember.destroy_all

Production.create(title: "Carmen", genre: 'Opera', budget: 800, image: "https://res.cloudinary.com/abzed/image/upload/v1656540562/m1z754tfyyl2ntqwxrtc.jpg", director: "Abzed", ongoing: true, )
Production.create(title: "Zoro", genre: 'Cats', budget: 700, image: "https://res.cloudinary.com/abzed/image/upload/v1656195200/ya8a3fu6nloodwugvmt4.jpg", director: "Harry", ongoing: false, )
Production.create(title: "Kata", genre: 'Hamlet', budget: 510, image: "https://res.cloudinary.com/abzed/image/upload/v1657975188/kxuym86omydplqhoix1p.png", director: "Suzy", ongoing: false, )
Production.create(title: "Beast", genre: 'Anime', budget: 1010, image: "https://res.cloudinary.com/abzed/image/upload/v1657510790/tuigagr6ahreayhxim85.jpg", director: "Demons", ongoing: true, )

30.times{CrewMember.create(name:Faker::Name.name, job_title: 'Stagehand', salary: 90, production: Production.all.sample)}