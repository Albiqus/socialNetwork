
const state = {
    
     dialogsPage: {
         dataOfDialogs: [{
                 name: 'Гриня Смирнов',
                 id: '1',
                 src: 'img/1.jpg',
                 messages: [{
                     message: 'Привет'
                 }, {
                     message: 'Есть косарь в долг?'
                 }, {
                     message: 'В среду отдам'
                 }]
             },

             {
                 name: 'Дмитрий Краснов',
                 id: '2',
                 src: 'img/2.jpg',
                 messages: [{
                     message: 'Здарова'
                 }, {
                     message: 'Не хочешь в буолинг сгонять?'
                 }]
             },

             {
                 name: 'Дашунчик Ковалёва',
                 id: '3',
                 src: 'img/3.jpg',
                 messages: [{
                     message: 'Привет, Дима с тобой?'
                 }, {
                     message: 'он сказал, что к тебе пошёл'
                 }, {
                     message: 'но мне кажется, что со шмарами тусуется своими'
                 }]
             },

             {
                 name: 'Арсен Тадитян ',
                 id: '4',
                 src: 'img/4.jpg',
                 messages: [{
                     message: 'Не спрашивал у Сани, ко скольки нам идти?'
                 }]
             },

             {
                 name: 'Юлия Вдовина',
                 id: '5',
                 src: 'img/5.jpg',
                 messages: [{
                     message: 'Приииииивет Андрей'
                 }, {
                     message: 'Как дела?'
                 }, {
                     message: 'Что делаешь?))'
                 }]
             },

             {
                 name: 'Наташа Фирсова',
                 id: '6',
                 src: 'img/6.jpg',
                 messages: [{
                     message: 'вы где'
                 }, {
                     message: 'я в машине, заехала во двор'
                 }, {
                     message: 'ауууу'
                 }]
             }
         ]
    },
    
    profilePage: {
    userData: {
            name: 'Андрей Постулчан',
            birthday: '10 февраля',
            city: 'Курган',
            maritalStatus: 'Женат'
        },

        dataOfPosts: [{
                message: 'наконец починил шкаф!',
                likeCount: '4'
            },

            {
                message: 'Жду новый сезон глухаря',
                likeCount: '1'
            },

            {
                message: 'Михалыч поймал рыбу ВО ДАЁТ',
                likeCount: '7'
            },
            {
                message: 'выпил пивка заебись!',
                likeCount: '30'
            },
        ]
    }
    
}


export {
    state
    }