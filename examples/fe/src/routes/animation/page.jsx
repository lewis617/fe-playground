import './style.css';

export default function page() {
  return (
    <>
      <p>
        使用 @keyframes 来定义动画，用 animation-name 消费动画，还可以设置
        animation-duration、animation-delay、animation-timing-function、animation-iteration-count
        等属性
      </p>
      <div className="box"></div>
    </>
  );
}
