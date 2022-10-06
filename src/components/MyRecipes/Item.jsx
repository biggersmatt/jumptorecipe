export default function Item() {
  return (
    <div className="item flex column border radius padding">
      <div className='flex space-around align-center flex-grow-1'>
        <h2>Tofu Scramble</h2>
        <p>20mins</p>
      </div>
      <div className='flex'>
        <p className="description padding">A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
      </div>
      <div className='flex space-around align-center flex-grow-1'>
        <div className='categories flex'>
          <p>Vegan</p>
          <p>|</p>
          <p>Breakfast</p>
        </div>
      </div>
    </div>
  )
}