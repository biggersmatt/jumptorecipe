import tofu from './tofu-scramble.jpeg';

export default function TestItem() {
  return (
    <div className="item">
      <div className='item-top'>
        <h2>Tofu Scramble</h2>
        <p>20mins</p>
      </div>
      <div className='item-middle'>
        {/* <img src={tofu} alt="" /> */}
        <p>A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
      </div>
      <div className='item-bottom'>
        <div className='item-bottom-wrapper'>
          <p>Vegan</p>
          <p>|</p>
          <p>Breakfast</p>
        </div>
      </div>
    </div>
  )
}