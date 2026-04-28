import '../../index.css';

function FormCadastroTeste({ aberto, fechado }: { aberto: boolean, fechado: () => void }) {
    if (!aberto) return null;

    return (
        /* Overlay com fundo escuro sólido, sem blur */
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4">
            
            <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl relative">
                
                {/* Botão X no canto superior direito */}
                <button 
                    onClick={fechado}
                    className="absolute top-5 right-6 text-gray-400 hover:text-red-500 transition-colors text-2xl font-bold"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-[#123354] mb-6 pr-8">Novo Registro de Teste</h2>
                
                <form className="flex flex-col gap-5">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase ml-1 tracking-widest">Tipo de Teste</label>
                        <select className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#123354] font-semibold text-[#123354]">
                            <option>SISTEMAS</option>
                            <option>ESTRUTURAL</option>
                            <option>AVIÔNICO</option>
                            <option>MOTORES</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase ml-1 tracking-widest">Resultado</label>
                        <div className="flex gap-2 mt-1">
                            <button 
                                type="button" 
                                className="flex-1 py-3 bg-green-50 border border-green-200 text-green-700 rounded-xl font-bold hover:bg-green-100 transition-all"
                            >
                                APROVADO
                            </button>
                            <button 
                                type="button" 
                                className="flex-1 py-3 bg-red-50 border border-red-200 text-red-700 rounded-xl font-bold hover:bg-red-100 transition-all"
                            >
                                FALHA
                            </button>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="bg-[#123354] text-white py-4 rounded-2xl font-bold mt-4 shadow-lg shadow-blue-900/20 active:scale-95 transition-all"
                    >
                        Salvar Relatório
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormCadastroTeste;