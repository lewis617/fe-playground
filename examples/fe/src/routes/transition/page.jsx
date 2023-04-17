import './style.css';

export default function page() {
  return (
    <>
      <p>
        盒子的多个属性一起动画：width, height, background-color, transform.
        将光标悬停在盒子上查看动画。
      </p>
      <div className="box"></div>
    </>
  );
}
