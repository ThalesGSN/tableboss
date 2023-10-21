-- Inserindo dados na tabela Categoria
INSERT INTO Categoria (ID_categoria, nome) VALUES (1, 'Entrada');
INSERT INTO Categoria (ID_categoria, nome) VALUES (2, 'Principal');
INSERT INTO Categoria (ID_categoria, nome) VALUES (3, 'Sobremesa');
INSERT INTO Categoria (ID_categoria, nome) VALUES (4, 'Bebida');

-- Inserindo dados na tabela Funcionario
INSERT INTO Funcionario (Nome, Funcao, UserName, Senha, Data_de_Contratacao, Salario) VALUES ('João Silva', 'Garçom', 'joaosilva', MD5('senha123'), '2022-01-01', 1500.00);
INSERT INTO Funcionario (Nome, Funcao, UserName, Senha, Data_de_Contratacao, Salario) VALUES ('Maria Oliveira', 'Chefe de Cozinha', MD5('mariaoliveira'), 'senha456', '2021-05-10', 3500.00);
INSERT INTO Funcionario (Nome, Funcao, UserName, Senha, Data_de_Contratacao, Salario) VALUES ('Pedro Alves', 'Garçom', 'pedroalves', MD5('senha789'), '2022-02-01', 1500.00);
INSERT INTO Funcionario (Nome, Funcao, UserName, Senha, Data_de_Contratacao, Salario) VALUES ('Carla Dias', 'Atendente', 'carladias', MD5('senha012'), '2022-06-01', 1300.00);
INSERT INTO Funcionario (Nome, Funcao, UserName, Senha, Data_de_Contratacao, Salario) VALUES ('Joao Gomes', 'Admin', 'admin', MD5('admin'), '1990-06-01', 18000.00);

-- Inserindo dados na tabela Fornecedor
INSERT INTO Fornecedor (Nome_da_Empresa, Contato) VALUES ('Alimentos & Cia', '+5511999999999');
INSERT INTO Fornecedor (Nome_da_Empresa, Contato) VALUES ('Frutas Tropicais Ltda', '+5511988888888');
INSERT INTO Fornecedor (Nome_da_Empresa, Contato) VALUES ('Carnes Premium', '+5511977777777');
INSERT INTO Fornecedor (Nome_da_Empresa, Contato) VALUES ('Verduras e Legumes SA', '+5511966666666');

-- Inserindo dados na tabela Ingrediente
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (1, 'Tomate', 200);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (2, 'Manga', 100);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (3, 'Carne Bovina', 500);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (4, 'Batata', 300);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (1, 'Pimentão', 80);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (1, 'Orégano', 50);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (2, 'Melão', 30);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (2, 'Uva', 100);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (3, 'Peito de Frango', 150);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (3, 'Carne Suína', 120);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (4, 'Cenoura', 150);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (4, 'Brócolis', 50);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (4, 'Milho', 80);
INSERT INTO Ingrediente (ID_fornecedor, nome, qtd_estoque) VALUES (4, 'Ervilha', 60);

-- Inserindo dados na tabela Item_do_Menu
INSERT INTO Item_do_Menu (ID_categoria, Nome, Descricao, Preco) VALUES (1, 'Salada Tropical', 'Salada com frutas e legumes', 15.90);
INSERT INTO Item_do_Menu (ID_categoria, Nome, Descricao, Preco) VALUES (2, 'Hamburguer Artesanal', 'Hamburguer com carne 100% bovina', 22.50);
INSERT INTO Item_do_Menu (ID_categoria, Nome, Descricao, Preco) VALUES (3, 'Sorvete', 'Sorvete de creme', 8.50);
INSERT INTO Item_do_Menu (ID_categoria, Nome, Descricao, Preco) VALUES (4, 'Suco Natural', 'Suco feito na hora', 8.50);
INSERT INTO Item_do_Menu (ID_categoria, Nome, Descricao, Preco) VALUES (1, 'Salada de Frutas', 'Salada com diversas frutas frescas', 12.90);
INSERT INTO Item_do_Menu (ID_categoria, Nome, Descricao, Preco) VALUES (2, 'Frango Grelhado', 'Peito de frango grelhado com temperos naturais', 19.50);
INSERT INTO Item_do_Menu (ID_categoria, Nome, Descricao, Preco) VALUES (4, 'Suco de Uva', 'Suco de uva natural e sem conservantes', 9.00);

-- Inserindo dados na tabela Ingrediente_Item_Menu
INSERT INTO Ingrediente_Item_Menu (ID_ingrediente, ID_item, Quantidade) VALUES (1, 1, 2); -- 2 Tomates na Salada Tropical
INSERT INTO Ingrediente_Item_Menu (ID_ingrediente, ID_item, Quantidade) VALUES (3, 2, 1); -- 1 Carne Bovina no Hamburguer Artesanal
INSERT INTO Ingrediente_Item_Menu (ID_ingrediente, ID_item, Quantidade) VALUES (3, 5, 3);  -- 3 Melões na Salada de Frutas
INSERT INTO Ingrediente_Item_Menu (ID_ingrediente, ID_item, Quantidade) VALUES (4, 5, 2);  -- 2 Uvas na Salada de Frutas
INSERT INTO Ingrediente_Item_Menu (ID_ingrediente, ID_item, Quantidade) VALUES (5, 6, 1);  -- 1 Peito de Frango no Frango Grelhado
INSERT INTO Ingrediente_Item_Menu (ID_ingrediente, ID_item, Quantidade) VALUES (7, 6, 1);  -- 1 Cenoura no Frango Grelhado
INSERT INTO Ingrediente_Item_Menu (ID_ingrediente, ID_item, Quantidade) VALUES (4, 7, 3);  -- 3 Uvas para fazer o Suco de Uva

-- Inserindo dados na tabela Mesa
INSERT INTO Mesa (Numero_de_Lugares) VALUES (2);
INSERT INTO Mesa (Numero_de_Lugares) VALUES (4);
INSERT INTO Mesa (Numero_de_Lugares) VALUES (6);
INSERT INTO Mesa (Numero_de_Lugares) VALUES (2);

-- Inserindo dados na tabela Status_Pedido
INSERT INTO Status_Pedido (ID_status, Status) VALUES (1, 'Pendente');
INSERT INTO Status_Pedido (ID_status, Status) VALUES (2, 'Em Preparo');
INSERT INTO Status_Pedido (ID_status, Status) VALUES (3, 'Pronto');
INSERT INTO Status_Pedido (ID_status,Status) VALUES (4, 'Entregue');

-- Inserindo dados na tabela Status_VIP
INSERT INTO Status_VIP (ID_status_vip, Status) VALUES (1, 'Bronze');
INSERT INTO Status_VIP (ID_status_vip, Status) VALUES (2, 'Prata');
INSERT INTO Status_VIP (ID_status_vip, Status) VALUES (3, 'Ouro');
INSERT INTO Status_VIP (ID_status_vip, Status) VALUES (4, 'Platina');

-- Inserindo dados na tabela Metodo_de_Pagamento
INSERT INTO Metodo_de_Pagamento (ID_metodo, Metodo) VALUES (1, 'Dinheiro');
INSERT INTO Metodo_de_Pagamento (ID_metodo, Metodo) VALUES (2, 'Cartão de Crédito');
INSERT INTO Metodo_de_Pagamento (ID_metodo, Metodo) VALUES (3, 'Cartão de Débito');
INSERT INTO Metodo_de_Pagamento (ID_metodo, Metodo) VALUES (4, 'Vale Refeição');
INSERT INTO Metodo_de_Pagamento (ID_metodo, Metodo) VALUES (5, 'PIX');

-- Inserindo clientes
INSERT INTO Cliente (ID_cliente, Nome, Contato, Endereco, Data_de_Nascimento) VALUES (0, 'Anonimo', NULL, NULL, NULL);
INSERT INTO Cliente (Nome, Contato, Endereco, Data_de_Nascimento) VALUES
                                                                      ('João Silva', '+5511987654321', 'Rua das Flores, 123', '1990-01-01'),
                                                                      ('Maria Oliveira', '+5511987654322', 'Av. do Sol, 456', '1985-05-05'),
                                                                      ('Pedro Fernandes', '+5511987654323', 'Rua das Pedras, 789', '1992-03-15'),
                                                                      ('Ana Souza', '+5511987654324', 'Av. do Mar, 101', '1988-08-20'),
                                                                      ('Lucas Martins', '+5511987654325', 'Rua das Estrelas, 121', '1995-11-11'),
                                                                      ('Julia Alves', '+5511987654326', 'Av. da Lua, 131', '1993-02-28'),
                                                                      ('Bruno Pereira', '+5511987654327', 'Rua dos Planetas, 141', '1989-06-10'),
                                                                      ('Camila Costa', '+5511987654328', 'Av. do Oceano, 151', '1996-12-05'),
                                                                      ('Roberto Dias', '+5511987654329', 'Rua da Montanha, 161', '1980-07-30'),
                                                                      ('Luisa Rocha', '+5511987654330', 'Av. do Campo, 171', '1987-04-21'),
                                                                      ('Felipe Castro', '+5511987654331', 'Rua da Praia, 181', '1991-09-14'),
                                                                      ('Isabel Ribeiro', '+5511987654332', 'Av. da Floresta, 191', '1994-10-03'),
                                                                      ('Maurício Ramos', '+5511987654333', 'Rua do Rio, 201', '1982-05-25'),
                                                                      ('Carolina Mello', '+5511987654334', 'Av. do Lago, 211', '1997-01-30'),
                                                                      ('Guilherme Lopes', '+5511987654335', 'Rua da Cidade, 221', '1984-03-08');


-- Inserindo clientes VIP
-- Considere que Status_VIP possui os valores: BRONZE, PRATA, OURO, PLATINA
-- Ajuste o 'Status' de acordo com o que você possui na tabela Status_VIP
INSERT INTO Cliente_VIP (ID_cliente, ID_status_vip, Historico_de_Visitas, Desconto) VALUES
                                                                                        (1, 1, 'Visita frequente nos finais de semana.', 5.00),  -- BRONZE
                                                                                        (2, 2, 'Sempre visita nas terças-feiras.', 10.00),      -- PRATA
                                                                                        (3, 3, 'Cliente antigo e fiel.', 15.00),                 -- OURO
                                                                                        (4, 4, 'Maior gastador do restaurante.', 20.00);        -- PLATINA
