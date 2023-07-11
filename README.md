# Тестовое задание на react, typescript.

Параметр удаляется когда его значение - пустая строка.

## Демо станица

https://parunkov.github.io/react6/

## Описание тестового задания

### Редактор параметров

Есть следующие структуры данных, описывающих товар – интерфейс Model и набор параметров этого товара. Необходимо реализовать на React компоненты, которые позволяют редактировать структуру Model – проставлять значения параметров при этом параметры должны выводиться все и сразу должны быть доступны для редактирования, а переданные значения в структуре проставлены в форме редактирования, которые передаются в params: Param[], а так же позволяют получить полную структуру в методе getModel() – содержащую все проставленные значения параметров. Решение должно быть легко расширяемым (например, позволять легко добавлять новые типы параметров – не только текстовые, но например числовые или со списком значений) Ваша реализация должна работать только с текстовыми параметрами Input – тип string.

Решение необходимо оформить в виде одного файла со всеми компонентами и типами которые используются.

Пример структуры:

params:
[
  {
    "id": 1,
    "name": "Назначение"
  },
  {
    "id": 2,
    "name": "Длина"
  }
]

model:
{
  "paramValues": [
    {
      "paramId": 1,
      "value": "повседневное"
    },
    {
      "paramId": 2,
      "value": "макси"
    }
  ] 
}


Пример как должен выглядеть редактор для указанных моделей:


> ![enter image description here](param.png "param")

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
