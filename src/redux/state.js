
const state = {

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
         ],

         dataOfFriends:[{
            name: 'Гриня Смирнов',
            id: '1',
            src: 'img/1.jpg',
         }, 
         
         {
            name: 'Дмитрий Краснов',
            id: '2',
            src: 'img/2.jpg'
        },
        
        {
            name: 'Дашунчик Ковалёва',
            id: '3',
            src: 'img/3.jpg',
        }, 

        {
            name: 'Арсен Тадитян ',
            id: '4',
            src: 'img/4.jpg',
        },
        
        {
            name: 'Юлия Вдовина',
            id: '5',
            src: 'img/5.jpg',
        },
        
        {
            name: 'Наташа Фирсова',
            id: '6',
            src: 'img/6.jpg',
        }]
    },
    
     dialogsPage: {
         dataOfDialogs: [{
                 name: 'Гриня Смирнов',
                 id: '1',
                 src: 'img/1.jpg',
                 messages: ['Привет', 'Есть косарь в долг?', 'В среду отдам']
             },

             {
                 name: 'Дмитрий Краснов',
                 id: '2',
                 src: 'img/2.jpg',
                 messages: ['Здарова', 'Не хочешь в буолинг сгонять?']
             },

             {
                 name: 'Дашунчик Ковалёва',
                 id: '3',
                 src: 'img/3.jpg',
                 messages: ['Привет, Дима с тобой?', 'он сказал, что к тебе пошёл', 'но мне кажется, что со шмарами тусуется своими']
             },

             {
                 name: 'Арсен Тадитян ',
                 id: '4',
                 src: 'img/4.jpg',
                 messages: ['Не спрашивал у Сани, ко скольки нам идти?']
             },

             {
                 name: 'Юлия Вдовина',
                 id: '5',
                 src: 'img/5.jpg',
                 messages: ['Приииииивет Андрей', 'Как дела?', 'Что делаешь?))']
             },

             {
                 name: 'Наташа Фирсова',
                 id: '6',
                 src: 'img/6.jpg',
                 messages: ['вы где', 'я в машине, заехала во двор', 'ауууу']
             }
         ]
    },
    
}


export {
    state
    }