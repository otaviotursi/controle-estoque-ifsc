using ControleEstoqueIFSC.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ControleEstoqueIFSC.Repository.Interfaces
{
    public interface IEstoqueRepository
    {
        List<Estoque> BuscarTodoEstoque();
    }
}
