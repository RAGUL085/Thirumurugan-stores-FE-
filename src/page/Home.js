import React, { useRef } from 'react'
import HomeCart from '../component/HomeCart'
import { useSelector } from 'react-redux'
import CartFeature from '../component/CartFeature'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import AllProduct from '../component/AllProduct'

const Home = () => {
  const productData = useSelector((state)=>state.product.productList)
  // console.log(productData)
  const homeProductCartList = productData.slice(12,18)

  const homeProductCartListVegetable = productData.filter(el => el.category === "vegetable")
  // console.log(homeProductCartListVegetable)

  const loadingArray = new Array(6).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)

  const slideProductRef = useRef()
  const nextProduct =()=>{
    slideProductRef.current.scrollLeft += 925
  }

  const previousProduct =()=>{
    slideProductRef.current.scrollLeft -= 925
  }

  
  // console.log(categoryList) 

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

      <div className='md:w-1/2'>
  <div className='flex gap-3 bg-white w-36 px-2 items-center rounded-full'>
    <p className='text-sm font-medium text-slate-900'>Fresh Produce</p>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABoVBMVEX////1hx76vhn6oDeRuUXhMi1poEH1eCjwSzdLjEH6wBn1hR6v12P1gm74rBs1N0T3mh3rYib4pByMuUZdmi33iy/n7uPKvDL6ryr6uwD2lB3oPjL2gyzfpzv8nzf1gQD5tRrWWgr5txrloDn3oBxdoEL7voP1gCP4kzI+hjL2jR2KtTQ6i0LinTmHsWz1cxmAkj73RDb81on5t4v5r43T4snnJyyweTz83MJ5qle/1ZmpyHI5hCxcmSqexlL6w5zn79ilxJCzzaKoxpTl7t+Wu36pxaWJsYR8qXYmKDh2lT/gHhfvOyK5dDzfGxPY5sHbjDHyXUn1wsH3pV7+9u397NOgwl630YxonWBVkUzY5dbC17SKtVSZu5Tb6Md6q0LC1cBwomn91Kztp1D8wob6p0j7tWt6rmHYrlajo6h8fYPT1NbNjzdBQ094eYDmoGwaHS9cXmf/7e/7lZLuam3mWFT52NeXmJ33tbDqenjjRUHRZTqHij25XjXzbFjIUDLvVDNabUVQX0QtKURof0TkUU336Lj7zVz7zFj814L95Knxjs7rAAAMrUlEQVR4nO3d/V8TyR0H8CQkMSR3IeCaVmx5OvBI0kNR4SCAICY8npfjjIBwehERilSr6NWr1+Nsbe15f3X3Obszs7vzuNnQ/fzQV4/kBft2Zr7zsEuIRMKECRMmTJiWpF7ejMdnaq7v2T1MJg8Xfbog3qmVSnE5pfiC41smklJSjiRN+HdZ/FJTfWoWHN4yofpUYxsSK01gvLSAfEsTKCfv7+VxyJZFiCZOzFmA0m2/L5A5cVtKD6E32FowmZxuwTWypQQQF4DXAWBSasVFMgUQgkQQ2IbCOBgbEQK2YS/dgojxivniDuhLJm+18FrpsgB2UznGa3kYKFXcvlkwU4aJM/pL0zBwt6XXShmYWCqrL9yCBqHUpitTBHEhgqoy7QKcqE5PTx9WF5tLTJi4GUH0UQuwsbS8ff/+9vJOC67fM2P6IkyS5g5369rXIGKpFlmEZkIdmF/ani0UOtXMrrQO4hRby0jSbW0lDbciVEd1YP6BoVNT2G4lBpUquAhLahcOEb9DA+0+hfiglRw4Fah6yEZ1itsCicC71D3FTifgU4jB2k9Bg0u9enWSmwGE39veUlXesjQL+WThUmtJQKoIoNFAgPC87S3KGx7ADRi8booWJiVltfkQ6KeW1+eUmWUZCQya8DZaqBGBfmrppkofdQAGrZfuoMahQQQW4c1uKuWdgZ2FgM36hw5ClQg0orUJHYGdQZvz806NqBBrJaRQmnABdgZrspBTSTp21EWgnJoD0aGKKl30fuCAchanpTkJOS9OzCCF1QZiHiwUZmcL28GqMpbkK7tVFNJ+pGGUmlso33IjH8TmswXe4Ca/Rwrvw8BgzYGOmYAbEVlM4SYM2AThHPgoDU/YNkDEVgNHGLQp3j0gEUcY+AJjzw6xsM2A4Imat5C4i+4sLa88WmkIuHTc7EoEwgLhleYfdGrHHrOtXBscEgjJltn5ldmC+W/Twt5t7acewlmiPtoITAXGFxZIvq19P9JS4Ri2kKSTrtiBj4RdPkZujZg5b4v+xT+ZISgXlhaUtyEFP/bJ+YnFanUMvLdyb2//4PFn7vnCzOOD/b17WD+t0SwxK0s7fmxDdg+T6nZJst2l3nuSy/VZ02FNHyq53JM97x+XN4Czy/7U0N3mxt5yA2mqI9dBk1yHZzuag7AhkmUmP2ad1MeML+/T+VTjvMdPNA4F/CmgFfvS0xBepgfKxH3XH6mf68w2hOOUgEekVe3LDC2oEl0Ho34qsOyHD94CauNwig0oE13G4k7Bz4UaeK9af37yCSOwo++x88/Upwp/zopvQ8dN6j/sHmsTyo045fhDtWHozw2NyhwIPFS//rjPm+DViAeOP3XZx5UodDdNuxtaZ29COXV5WkDmkSZsIF+scwUi7lKoX2euM0pyU/JEi4zxr4l+ketjVbvQEyPat5/nItxzvJHlmjmez4qPgd9dn+732YehPBD/PEIlbK6qKHL09Ombo+Pmf0PfXJ+hLuMJ+0b/4Ja/UAoZHlF9tqrm2XMdCT71M2dUNzzhhXOuufJXOqFE/4jqm9UuLTJSNQLrmeYvS2AJPYDnrtxYhOYiHGCSoQm7mnnxNAIsSaXp5sOvOMJRD6AsjExUx7RcNQKB1oxX9HeO3WaYLl5ahF2rz/I24Zy1b+AIvYCKUM/Jq9S4ljvGjzM78NXEpJbX39LLjBy96LLlxOyl0lzV9vQyhtCzCZvCV+PjKTXjdwzYyJdrxv9bS+hZ/+FvzMQ3qy/kQmMKnzXmtPl3bBdY5WMIvUahKfzxK91nA44nYGLi67+fsBJPjo+PnneZBefljpwKYg/DT3hy+lUKBUwlLiGI6wkOXVXOkUk8cngHN+G3qXE0MJVIvEUQ5WbkQoy81I0vBAtfmQ0oJ2kFykJLK3452WzGt8w91UpcfSNU+NoK/GnECkypHIN4tSmUm5FPTzXmRoHCc+9SKVioAzWh0Yr/sAoT6z/yEB5rM8fqMfJVLsIUkLURC1ATykT1iz/bhJyIzzXhU7TQE+gtBIGpjbWRkeQdo/LomEtXR0asw1DvqHTESq1c3iqXawvq9HCsjcSXzdfK5muR65+D+4QLo4RC03V6erphdNSfNszSamAmf/n5LQikGou1mXhJjvY/M/IMf9IciA+3LK9tluXVzY0r8CVfIBLqY3DjUy2nUItCKHsmCdc35bj9uclSfKui1Zr3+Rr4WmmmghKe6yMQAkAE0UOYeEvUfiXEb9iV1pS1zft/xlGvfYO66lF8YTcIhIlewvXX2L78DMKg5l/vu9aQL5xnFeqKT60hFOJXm4oDT8m/v0N/HS3EH4fvUMINQmFiEm9xs+ACdAxSOIot7DbKqE14SizE6qcW4E05uMIvRqEQzIcpPkK8KaPp+0QLnvCPLGuabl5CnHpqFplPzIgXNhVs4xCn2NRgIBaRSdjdVJyy1FI1XsJNoIuqwRiMTEIrw7kJ8YTrHiPRbEKbEKMRWYTdVsaGIxCzDX/Aa0JbJxUttG8KjY4KATGF667L0+YvYvkphCgbGzAPX/jKTVhuhbAbpUHkEp4w8R+sTurnOHznjSMSfu22dLMsuP2rpZhAbKHbgYb19yFvEjUhgxC3k2IOQzkui1Pbr+3eJAEGSjjpLLT/OuRN7C7KJOQ9DF0HYg3c+BLsLaiEg4OD2MMQG+i2rIGE+KERDqrhDnQrNf4KB0mE+H1UHofOt2rADwjwQ4hXaEiAbsUU9RFWgRCSAV1WNflgCgl9rhv9FlQaTyGxL+G2C970pnAUahP+JddQ8FyFiE/LEy6kM9AK6aeLQAldxmHlbAjddoi0wGAJ3U6+qQci/cqbP9D1HONh6TxlgiR0OxX+8DvaDPzeMz05NcXPbenmnxt7ew5PK/528WKMOmnc9GSigtMv5zIK+F8GH8G/hHihqrwLN+NHX4B+CWUiCLznD9A3YbQf/B0jn5rQP2EGbMQ0eCVg2k0Y7QeEQBOmB3rsyXIyBkWY7s2AKQ5xIQZEiLqMTO+ZEhYRl5Hh0oih0C/hMKKXFjn4AiOMxeBKEx04S+Mwlo5lh+3piZ2t2eL/YMYXllAYCkNhKDzLQl6zQXCF/pxD+bnHfwIIP5w1IXROE/n1jJ21gU0YidT9Ifp1XjqKOvb+eNEM9gk2eUQK+80coM/1679d05MVl5xA4XU9896fsnAX2h7yizAfdELqlvl+YdchLv0en9tny1RbCp0/KwxOvS2FRJ9xUmz15VKkSAIUWWpEAYkKjfLZXaLSK4pIVGiUO95tN+MTFRq51IhawgkUkn2YUhsKR4mA4vaLwoTwjXuPiLrrLU5IVmjYd8RggREvJCs0rM9mpGPAjmLAuO0hbhySfmpbnQmYjYLzfFG/dSVMSFpoIpFfGYAD8MolkxHbhoQrGiUMpQZ1gzWayaZFCokLDVOpQQt7xApJCw1TqUlnUcIBsUKKj4e0CqHVpQcxB28phgVXGnJgZMhyxUMDQDyM6Wyu15ZcVuxsQVFoIpFrZiOme6Di3+txWx/eU5jfS4iQotBEInuGEDWsqJ+QEiUkLzSW7UUatWnNUD58IkpI9Tm0phD5hFSwhGRnNEaMVQ3yCakolU+UkKrQWEtNES7+WW7jkMdJFVWhUc5qjKuKDfcCxZ/6ETBQKJdlIFEKI1WhsZ1kOBZ/VqHyYC6QIYp7N3SFhm0DhSuE59U0srK5JkO+ddIi4qzGLszkEJ2BvBhRFhoxZzWAcBglRC3cXUNZaMQ8vQAIiyghavPlLqQrNGJ+jwYch1m4iA0Q+qLkZzRm+APh2SIHbluGyacL2kLDdFaDK4QmfIopn7rQWFc14oQcQl1ohJQaIULaQiOk1AgRMvwJjzYR0gOtZzXe1461chUgZCg0JKUmHRsCgjYKEDIUGssGyhOYhfaQvcjfkxIhpC80+LeCkXcqUCsyIUKmPy2HK3S5UyFcSL+iUYK5gUqjdq0+CYlvb9uDWWqQ1408jhMgZCk0BKsaxGEVancrQshSaAhKTWy4aE8v+jROgJDtb1jin9VgHlZxF1Kf0Rjh/Xw7fyFboeF/VsNdyFho+G+g+AvZCg3/DRR/IfMfy+ULFFBLWYFEG6gWCJkLDfezGt5C5kLDvdSQH/d6CFkLDfdSg7xlziLk8Fe5ORdTzoWGdUWjhOucT37XxT391zkIuXZT5EaSRcjlT8dzvI2YHuAMPOAB5NmIvOsM/U0ne7BP3DyBvCfDPT5AbsUmkGVGD4+FTZo7kH05Y8mHGKsxHeNbRvtH2VczttSvXWT4eNN0OtZD8ySQQzL9/UWuDajnw8chSuBANsfRFx29O39PgC9MmDBhwoQJEyZMmDBhXPI/YDpLlaQgTF4AAAAASUVORK5CYII" alt='Produce' className='h-13' />
  </div>
  <h2 className='text-4xl md:text-7xl font-bold py-3'>Farm Fresh Quality {" "}
  <span className='text-green-700 text-5xl md:text-7xl'>Available </span></h2><p className='py-3 text-base'>Experience the convenience of finding the freshest produce and pantry staples right in your neighborhood. From crisp fruits to vibrant vegetables, our curated selection guarantees quality and freshness with every visit. Elevate your meals and support local farmers by choosing from our premium range of ingredients. Visit us today and discover a world of flavor at your fingertips.</p>

 </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
            homeProductCartList[0] ? homeProductCartList.map(el =>{
              return(
                <HomeCart
                  key = {el._id}
                  id= {el._id}
                  image = {el.image}
                  name = {el.name}
                  price = {el.price}
                  category = {el.category}
                />
              )
            })
            :
            loadingArray.map((el, index) => {
              return(
                <HomeCart 
                  key = {index+"loading"}
                  loading = {"Loading..."}
                />
              )
            })
          }
          
        </div>
      </div>
      <div className=''>
        <div className='flex w-full items-center justify-between'>
          <h2 className='font-bold text-2xl text-green-700 mb-4'>Fresh Vegetables</h2>
        
          <div className= 'ml-auto flex gap-4 mb-2'>
            <button onClick={previousProduct} className='bg-slate-300 hover:bg-slate-400 text-xl p-2 rounded '><GrFormPrevious /></button>
            <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-xl p-2 rounded'><GrFormNext /></button>
          </div>
        </div>
        <div ref={slideProductRef} className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all'>
            {
              homeProductCartListVegetable[0] ? homeProductCartListVegetable.map(el => {
                return(
                  <CartFeature
                    key = {el._id+"vegetable"}
                    id = {el._id}
                    name = {el.name}
                    category = {el.category}
                    price = {el.price}
                    image = {el.image}
                  />
                )
              })
              :
              loadingArrayFeature.map((el, index) => (
              <CartFeature  loading="loading..." key={index+"cartLoading"} />))        
            }
          </div>
        </div>
            <AllProduct heading={"Your Fresh Products"}/>
        
    </div>
  )
}

export default Home
