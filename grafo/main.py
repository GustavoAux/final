from grafo import *
from random import choice, randint

grafo = Grafo()

for i in range(5):
    grafo.addVertice((randint(-680, 680), randint(-460, 480)))


for i in grafo.grafos:
    vertice = choice(grafo.grafos)['vertice']
    aresta = choice(grafo.grafos)['vertice']
    grafo.addAresta(vertice, aresta)

grafo.mostrar()
print('#'*10)
print(grafo.vizinhos(choice(grafo.grafos)['vertice']))
# print('#'*10)
# grafo.mostrar()