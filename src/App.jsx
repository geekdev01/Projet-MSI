function App() {

  return (
    <>
      {/* <div className="bg-secondary text-500 text-gray-950 text-center p-10 container mx-auto mt-4  ">
      <h1 className="text-4xl font-sf">Hello, Tailwind CSS!</h1>
    </div> */}
    <div className="container mx-auto flex flex-row justify-center gap-16 mt-12"> 
        <div className="bg-secondary text-500 text-gray-950 text-center p-12  mt-4 font-sf w-3/6 h-96 rounded-xl ">
            <h2 className="text-4xl font-bold text-start text-wrap ">Top 16 Most Common Plants in <br /> Littoral</h2>
            <hr className="mt-6" />
            <p className="text-start text-xl mt-6">In Littoral, you can find African oil palm, Water hyacinth, Chinese hibiscus, African sausage tree, Pepper, and more! There are 16 types of plants in total. Be sure to look out for these common plants when you’re walking on the streets, in parks, or public gardens.</p>
        </div>

      <div className="rounded-2xl font-sf border-2 border-green-100 text-xl w-3/12 float-end py-6 px-8 flex flex-col justify-center gap-12">
          <div className="font-bold">
          Africa &gt; Cameroon &gt; Littoral
          </div> 
          <div className="text-xl">
            Cotonou
          </div>
          <div className="text-xl">
            Douala
          </div>
          <div className="text-xl">
            Edea
          </div>
          <div className="text-xl">
            Nkongsamba
          </div>
      </div>
    </div>
      
    </>
  )
}

export default App
