import '../../index.css'

function FormEditarFuncionario({ aberto, fechado, funcionario }: { aberto: boolean, fechado: () => void, funcionario: any }) {
    if (!aberto) return null;
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="max-w-2xl w-full bg-white rounded-3xl p-8 relative">
                <button onClick={fechado} className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold">✕</button>
                <h2 className="text-2xl font-bold text-[#123354] mb-8">Editar Membro</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="md:col-span-2">
                        <label className="text-xs font-bold text-gray-400 uppercase">Nome</label>
                        <input type="text" defaultValue={funcionario.nome} className="w-full mt-1 p-3 bg-gray-50 border rounded-xl outline-none" />
                    </div>
                    <button type="submit" className="md:col-span-2 bg-[#123354] text-white py-4 rounded-2xl font-bold">Salvar Alterações</button>
                </form>
            </div>
        </div>
    )
}
export default FormEditarFuncionario;