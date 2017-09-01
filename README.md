# Fonts checker

## Как добавить шрифт

1. Заходим на [генетатор шрифтов](https://fontie.pixelsvsbytes.com/webfont-generator)
2. Перетаскиваем туда шрифт в формате `.ttf` или `.otf`
3. Выбираем там настройки:
  * Formats — галочка только у Web Open Font Format (woff)
  * Subsetting — Keep existing characters
  * Hinting — Keep existing hints
  * Optimisations, Stylesheets, Preview — не трогаем
4. Генерируем и сохраняем
5. Из полученного архива перетаскиваем `.woff` файлы в папку fonts
6. В файл `fonts.css` добавляем шрифты. Пример:
  ``` css
  @font-face {
      font-family: 'Georgia-Bold';
      src: url('fonts/Georgia-Bold.woff');
      font-weight: normal;
  }
  ```
  `font-family` можно дать любое название.

7. В файл `fonts.js` добавляем шрифт. Название шрифта берется из `font-family` описанного в пункте 6.
8. Сохраняем, коммитим и радуемся.
