

export default function Integrante({nome, rm, github}: {nome: string, rm: string, github: string}) {
    return (
        <div className='w-2/3 m-auto p-5 my-5 bg-[#006BB8] rounded-lg hover:shadow-lg hover:scale-105 transition text-white hover:bg-white hover:text-black'>
            <h2 className='text-xl font-bold'>{nome}</h2>
            <p>RM: {rm}</p>
            <a href={github} target='_blank' rel='noreferrer'><i className="bi bi-github"></i>  GitHub</a>
        </div>
    )
}