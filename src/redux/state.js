import { rerender } from "../render";

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
            name: 'Гриня',
            id: '1',
            src: 'img/1.jpg',
         }, 
         
         {
            name: 'Дмитрий',
            id: '2',
            src: 'img/2.jpg'
        },
        
        {
            name: 'Дашунчик',
            id: '3',
            src: 'img/3.jpg',
        }, 

        {
            name: 'Арсен',
            id: '4',
            src: 'img/4.jpg',
        },
        
        {
            name: 'Юлия',
            id: '5',
            src: 'img/5.jpg',
        },
        
        {
            name: 'Наташа',
            id: '6',
            src: 'img/6.jpg',
        }]
    },
    
     dialogsPage: {
         dataOfDialogs: [{
                 name: 'Гриня Смирнов',
                 id: '1',
                 src: 'img/1.jpg',
             },

             {
                 name: 'Дмитрий Краснов',
                 id: '2',
                 src: 'img/2.jpg',
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
             }
         ],
         dataOfMessages: [
          {
            id: 1,
            message: 'Привет'
          },

          {
            id: 2,
            message: 'Как дела?'
          }, 
          {
            id: 3,
            message: 'Чё делаешь?'
          }
         ]
    }
    
}

const addPost = (postMessage) => {
    const newPost = {
        message: postMessage,
        likeCount: '0' 
    };
    state.profilePage.dataOfPosts.push(newPost)
    rerender(state)
}

export {addPost}

export {
    state
    }