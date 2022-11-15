using ControleEstoqueIFSC.Model;
using ControleEstoqueIFSC.Repository.Interfaces;
using ControleEstoqueIFSC.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ControleEstoqueIFSC.Services
{
    public class EstoqueService : IEstoqueService
    {
        private readonly IEstoqueRepository eventosPublicRep;
        public EstoqueService(IEstoqueRepository eventosPublicRep)
        {
            this.eventosPublicRep = eventosPublicRep;
        }

        public List<Estoque> BuscarTodoEstoque()
        {
            return this.eventosPublicRep.BuscarTodoEstoque();
        }

    }
}
