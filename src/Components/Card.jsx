import React from 'react'
const Card = ({name,price,cat,cmp}) => {
  return (
    <>
     <div class="card" style={{width:"400px"}}>
    <img alt='no img' class="card-img-top" src="https://www.fitbit.com/global/content/dam/fitbit/global/marketing-pages/quiz/desktop/fall2022-quiz-pathing-module-trackers.jpg"  style={{width:"100%"}}/>
    <div class="card-body">
      <h4 class="card-title">Name:-{name}</h4>
      <h4 class="card-title">Price:-{price}</h4>
      <h4 class="card-title">Category:-{cat}</h4>
      <h4 class="card-title">Company:-{cmp}</h4>
      <a href="https://www.paypal.com/in/signin" class="btn btn-primary">Buy Now</a>
    </div>
  </div>
    </>
  )
}

export default Card