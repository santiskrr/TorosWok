import React from "react";
function Corea() {
  return (
    <>
    <div className="bg-black flex m-20">
      <div className='plato rounded-2xl p-3 m-1 bg-black h-70 w-60'>
        <h1 className="text-center text-white">Ramen</h1>
          <div>
            <img className="imagen rounded-2xl" src="https://resizer.glanacion.com/resizer/v2/a-shoyu-ramen-in-gray-bowl-on-concrete-table-top-3CCBARMPDRFI5O6H5OPS3PP66E.jpg?auth=5f4d38a8750849d33b7c6e6cd4aec32bcd639658006140e82c66d27189a3ca47&width=1280&height=854&quality=70&smart=true"/>
          </div>
        <p className="text-green-500 text-center">17.000$</p>
      </div>

      <div className='plato rounded-2xl p-4 m-1 bg-black h-70 w-60'>
      <h1 className="text-center text-white">Tsukemen</h1>
      <img className="imagen rounded-2xl" src="https://www.chopstickchronicles.com/wp-content/uploads/2024/07/tsukemen-8.jpg"/>
      <p className="text-green-500 text-center">20.000$</p>
      </div>

      <div className='plato rounded-2xl p-5 m-1 bg-black h-70 w-60'>
      <h1 className="text-center text-white">Sushi</h1>
      <img className="imagen rounded-2xl" src="https://media.traveler.es/photos/633bec4ac1242ab11aad16c2/master/w_1600%2Cc_limit/GettyImages-1312786697.jpg"/>
      <p className="text-green-500 text-center">35.000$</p>
      </div>

      <div className='plato rounded-2xl p-5 m-1 bg-black h-70 w-60'>
      <h1 className="text-center text-white">Yakitori de pollo</h1>
      <img className="imagen rounded-2xl" src="https://i.ytimg.com/vi/gv93YPgIZ_U/maxresdefault.jpg"/>
      <p className="text-green-500 text-center">15.000$</p>
      </div>
      
      <div className='plato rounded-2xl p-5 m-1 bg-black h-70 w-60'>
      <h1 className="text-center text-white">Yakiniku</h1>
      <img className="imagen rounded-2xl" src="https://media.traveler.es/photos/63c937c603e04fc7ac9df53c/master/w_1600%2Cc_limit/iStock-453061093.jpg"/>
      <p className="text-green-500 text-center">21.500$</p>
      </div>
    </div>
    </>
  );
}

export default Corea;