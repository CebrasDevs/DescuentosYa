

export default function detail( {id} ) {


    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  text-9xl  " > {`Estoy en el detail ${id}`} </h1>
      </main>
    )
  }