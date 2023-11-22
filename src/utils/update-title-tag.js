export const updateTitleTag = (text) => {
  const headTag = document.head;
  const titleTag = headTag.querySelector('title');

  if (text === 'О компании') {
    return (titleTag.innerText =
      'Творческое объединение &quot;Красная звезда&quot; &#124; Официальный сайт\n' +
      '      акционерного общества &quot;Творческое объединение &quot;Красная звезда&qu');
  }

  return (titleTag.innerText = text);
};
