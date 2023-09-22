import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getTest() {
    return [
      {
        name: "James",
        age: 24
      },
      {
        name: "JoJo",
        age: 16
      },
      {
        name: "Brayden",
        age: 18
      },
      {
        name: "Addison ",
        age: 29
      }
    ]
  }

  getObject() {
    return {
      Message: [
        {
          name: "Eastward",
          star: 5
        },
        {
          name: "Sea Of Stars",
          star: 5
        },
        {
          name: "Core Keeper",
          star: 4
        },
        {
          name: "Cyberpunk 2077",
          star: 4
        },
      ]
    }
  }


  Message(){
    return {
      Message: [
        {
          Framework: "Hello Nest Js",
        },
      ]
    }
  }


  // * Post

  Post1(title:string,subtitle:string) {
    return {
      Message: [
        {
          title: title,
          subtitle: subtitle
        }
      ]
    }
  }


  Delete1(id:string) {
    return {
      id: id
    }
  }

  Delete2(id:string,name:string) {
    return {
      id: id,
      name: name
    }
  }
}
