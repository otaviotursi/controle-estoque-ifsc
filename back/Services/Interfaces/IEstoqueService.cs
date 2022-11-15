using ControleEstoqueIFSC.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ControleEstoqueIFSC.Services.Interfaces
{
    public interface IEstoqueService
    {
        List<Estoque> BuscarTodoEstoque();
    }
}
