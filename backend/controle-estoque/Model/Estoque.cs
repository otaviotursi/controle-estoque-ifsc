using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ControleEstoqueIFSC.Model
{
    public class Estoque
    {
        public long id { get; set; }
        public string nome_produto { get; set; }
        public decimal valor { get; set; }
        public long quantidade { get; set; }
        
    }
}
