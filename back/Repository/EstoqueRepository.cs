using ControleEstoqueIFSC.Model;
using ControleEstoqueIFSC.Repository.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using MySql.Data.MySqlClient;

namespace ControleEstoqueIFSC.Repository
{
    public class EstoqueRepository : RepositoryBase, IEstoqueRepository
    {
        public EstoqueRepository(IConfiguration configuration) : base(configuration)
        {
        }

        public List<Estoque> BuscarTodoEstoque()
        {
        var query = @"SELECT 
                                id, 
                                nome_produto, 
                                valor, 
                                quantidade
                         FROM estoque";

            using (var connection = new MySqlConnection(banco))
            {
                try
                {
                    var retorno = connection.Query<Estoque>(query).AsList();
                    return retorno;
                }
                catch (Exception ex)
                {
                    string msgErro = $"Erro ao BuscarTodoEstoque: {ex}";
                    //_logger.LogError(msgErro);
                    throw new Exception(msgErro);
                }

            }
        }
    }
}
