CREATE TABLE Cliente (
    ID_cliente INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    Contato VARCHAR(255),
    Endereco VARCHAR(255),
    Data_de_Nascimento DATE
);

CREATE TABLE Fornecedor (
    ID_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
    Nome_da_Empresa VARCHAR(255) NOT NULL,
    Contato VARCHAR(255) NOT NULL
);

CREATE TABLE Ingrediente (
    ID_ingrediente INT AUTO_INCREMENT PRIMARY KEY,
    ID_fornecedor INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    qtd_estoque INT NOT NULL,
    FOREIGN KEY (ID_fornecedor) REFERENCES Fornecedor(ID_fornecedor)
);

CREATE TABLE Categoria (
    ID_categoria INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE Item_do_Menu (
    ID_item INT AUTO_INCREMENT PRIMARY KEY,
    ID_categoria INT NOT NULL,
    Nome VARCHAR(255) NOT NULL,
    Descricao TEXT,
    Preco DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (ID_categoria) REFERENCES Categoria(ID_categoria)
);

CREATE TABLE Funcionario (
    ID_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    Funcao VARCHAR(255) NOT NULL,
    UserName VARCHAR(255) NOT NULL,
    Senha VARCHAR(255) NOT NULL,
    Data_de_Contratacao DATE NOT NULL,
    Salario DECIMAL(10,2) NOT NULL
);

CREATE TABLE Mesa (
    ID_mesa INT AUTO_INCREMENT PRIMARY KEY,
    Numero_de_Lugares INT NOT NULL
);



CREATE TABLE Conta (
    ID_conta INT AUTO_INCREMENT PRIMARY KEY,
    ID_cliente INT,
    Data_do_Pagamento DATE NOT NULL,
    Valor_Total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (ID_cliente) REFERENCES Cliente(ID_cliente)
);

CREATE TABLE Status_Pedido (
    ID_status INT AUTO_INCREMENT PRIMARY KEY,
    Status VARCHAR(255) NOT NULL
);

CREATE TABLE Pedido (
    ID_pedido INT AUTO_INCREMENT PRIMARY KEY,
    ID_conta INT,
    ID_cliente INT,
    ID_mesa INT,
    ID_funcionario INT,
    ID_status_pedido INT NOT NULL,
    Data_do_Pedido DATE NOT NULL,
    FOREIGN KEY (ID_conta) REFERENCES Conta(ID_conta),
    FOREIGN KEY (ID_cliente) REFERENCES Cliente(ID_cliente),
    FOREIGN KEY (ID_mesa) REFERENCES Mesa(ID_mesa),
    FOREIGN KEY (ID_funcionario) REFERENCES Funcionario(ID_funcionario),
    FOREIGN KEY (ID_status_pedido) REFERENCES Status_Pedido(ID_status)
);


CREATE TABLE Reserva (
    ID_reserva INT AUTO_INCREMENT PRIMARY KEY,
    ID_mesa INT,
    ID_cliente INT,
    Data TIMESTAMP NOT NULL,
    Numero_de_Pessoas INT NOT NULL,
    Observacoes TEXT,
    FOREIGN KEY (ID_mesa) REFERENCES Mesa(ID_mesa),
    FOREIGN KEY (ID_cliente) REFERENCES Cliente(ID_cliente)
);

CREATE TABLE Status_VIP (
    ID_status_vip INT AUTO_INCREMENT PRIMARY KEY,
    Status VARCHAR(255) NOT NULL
);

CREATE TABLE Cliente_VIP (
    ID_cliente INT PRIMARY KEY,
    ID_status_vip INT NOT NULL,
    Historico_de_Visitas TEXT,
    Desconto DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (ID_cliente) REFERENCES Cliente(ID_cliente),
    FOREIGN KEY (ID_status_vip) REFERENCES Status_VIP(ID_status_vip)
);

CREATE TABLE Item_do_Pedido (
    ID_pedido INT,
    ID_item INT,
    Quantidade INT NOT NULL,
    Preco_Unitario DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (ID_pedido, ID_item),
    FOREIGN KEY (ID_pedido) REFERENCES Pedido(ID_pedido),
    FOREIGN KEY (ID_item) REFERENCES Item_do_Menu(ID_item)
);


create TABLE Metodo_de_Pagamento (
    ID_metodo INT AUTO_INCREMENT PRIMARY KEY,
    Metodo VARCHAR(255) NOT NULL
);

CREATE TABLE Pagamento (
    ID_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    ID_conta INT,
    ID_metodo INT NOT NULL,
    vlr_pago DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (ID_conta) REFERENCES Conta(ID_conta),
    FOREIGN KEY (ID_metodo) REFERENCES Metodo_de_Pagamento(ID_metodo)
);

CREATE TABLE Ingrediente_Item_Menu (
    ID_ingrediente INT,
    ID_item INT,
    Quantidade INT NOT NULL,
    PRIMARY KEY (ID_ingrediente, ID_item),
    FOREIGN KEY (ID_ingrediente) REFERENCES Ingrediente(ID_ingrediente),
    FOREIGN KEY (ID_item) REFERENCES Item_do_Menu(ID_item)
);

