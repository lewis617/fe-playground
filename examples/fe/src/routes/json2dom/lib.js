/**
 * 把虚拟Dom转化成真实Dom
 */

const vdom = {
  tag: 'DIV',
  attrs: {
    id: 'app',
  },
  children: [
    {
      tag: 'SPAN',
      children: [{ tag: 'A', children: [] }],
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] },
      ],
    },
  ],
};

const render = node => {
  const { tag, attrs, children } = node;
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  children.forEach(child => {
    el.appendChild(render(child));
  });
  return el;
};
console.info(render(vdom));
