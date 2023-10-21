import mysqlConnection, {selectFromDatabase, someFromDatabase} from "../../utils/mysqlConnection";
import Funcionario from "tableboss-shared/dist/Funcionario";
import sqlToFuncionario from "./mappers/sqlToFuncionario";


const FuncionarioRepository = {
    funcionarioExists: (userName: string) => {
        const sql = 'SELECT 1 FROM Funcionario WHERE UserName = ?';
        let booleanPromise = someFromDatabase({sql, args: [userName]});
        return booleanPromise
    },
    login: async (userName: string, senha: string) => {
        const sql = 'SELECT * FROM Funcionario WHERE UserName = ? and Senha = MD5(?)';
        const [funcionario] = await selectFromDatabase<Funcionario>({
            sql,
            mapper: sqlToFuncionario,
            args: [userName, senha]
        });

        return funcionario as Funcionario
    }
}

export default FuncionarioRepository;
