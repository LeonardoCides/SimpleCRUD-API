Criar um item:
curl -X POST -H "Content-Type: application/json" -d '{"name": "Item 1"}' http://localhost:3000/items

Listar todos os itens:
curl http://localhost:3000/items

Atualizar um item:
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Item 1"}' http://localhost:3000/items/1

Deletar um item:
curl -X DELETE http://localhost:3000/items/1
