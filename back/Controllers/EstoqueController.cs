using ControleEstoqueIFSC.Model;
using ControleEstoqueIFSC.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ControleEstoqueIFSC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstoqueController : ControllerBase
    {
        private readonly IEstoqueService EstoqueService;
        public EstoqueController(IEstoqueService EstoqueService)
        {
            this.EstoqueService = EstoqueService;
        }

        [HttpGet("BuscarTodoEstoque")]
        public List<Estoque> BuscarTodoEstoque()
        {
            return this.EstoqueService.BuscarTodoEstoque();
        }
    }

}
