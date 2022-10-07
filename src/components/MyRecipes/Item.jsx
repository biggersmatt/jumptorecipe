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
        <div className='flex'>
          <p className='padding-sides'>Vegan</p>
          <p className='padding-sides'>|</p>
          <p className='padding-sides'>Breakfast</p>
        </div>
      </div>
    </div>
  )
}