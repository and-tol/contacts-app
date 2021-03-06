Приложение отображает данные в виде таблицы.
Колонки ряда таблицы:

- Avatar
- Fullname
- Birthday (формат - День недели, mm/dd/yyyy, hh:mm am, кол-во лет)
- Email (кликабельный с возможностью скопировать)
- Phone (кликабельный с возможностью скопировать)
- Location (Страна, Город)
- Национальность

1. Переключение режима просмотра данных:

- табличный вид
- плиточный вид

Выбранное значение должно запоминаться в localStorage и в состоянии приложения.
При обновление страницы или перемонтировании компонента, данные должны
отобразиться в том виде, который выбрал пользователь. Если страница посещается
впервые, то использовать по-умолчанию табличный вид

3. Фильтрование данные:

- по полному имени;
- по половому признаку;
- по национальности;

Фильтрация должна происходить без ручной отправки формы.

Очистка фильтра возвращает коллекцию к изначальному состоянию.

Фильтровать нужно всю коллекцию, а не только ту часть которая сейчас в таблице
отображается.

4. Пагинация

- по 10 пользователей на странице
- кол-во страниц зависит от кол-во учитывая фильтр

5. Возможность сортировать данные по полному имени в трех состояниях:

- отAдоZ
- отZдоA
- изначальный порядок

Сортировка всей коллекции, а не только та часть которая сейчас в таблице
отображается

1. Под таблицей необходимо статистика по данным

- размер коллекции
- кол-во мужчин, женщин и неопределившихся
- вывести кого больше
- кол-во контактов по каждой национальности

7. Обновление данных по клику на кнопку без перезагрузки
   страницы
   
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
