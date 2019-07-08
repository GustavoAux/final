from turtle import *
from time import sleep
from random import *

class Grafo:
    def __init__(self):
        self.grafos = []

    def addVertice(self, vertice):
        self.grafos.append({'vertice': vertice, 'aresta': []})
    
    def addAresta(self, vertice, aresta):
        for grafo in self.grafos:
            if grafo['vertice'] == vertice:
                grafo['aresta'].append(aresta)
    
    def removeAresta(self, aresta_v):
        for grafo in self.grafos:
            for aresta in grafo['aresta']:
                if aresta == aresta_v:
                    grafo['aresta'].remove(aresta)
        return aresta_v

    def removeVertice(self, vertice_v):
        for grafo in self.grafos:
            for aresta in grafo['aresta']:
                if aresta == vertice_v:
                    grafo['aresta'].remove(aresta)

        for grafo in self.grafos:
            if grafo['vertice'] == vertice_v:
                self.grafos.remove(grafo)
        return vertice_v

    def vizinhos(self, vertice):
        for grafo in self.grafos:
            

    def mostrar(self):
        for grafo in self.grafos:
            print(grafo)


    def desenhar(self):
        self.janela  = Screen()
        self.caneta = Pen()
        for grafo in self.grafos:
            self.caneta.color('red')
            self.caneta.penup()
            self.caneta.goto(grafo['vertice'])
            self.caneta.pendown()
            self.caneta.circle(1)
            self.caneta.write(grafo["vertice"])
            
            print(f'{grafo["vertice"]}')
            # sleep(0.5)
            
            self.caneta.color(choice(['black', 'blue', 'yellow', 'green', 'gray']))

            if grafo['aresta'] != []:
                for aresta in grafo['aresta']:
                    # self.caneta.penup()
                    self.caneta.goto(aresta)
                    self.caneta.pendown()
                    # self.caneta.circle(5)
                    print(f'\t {aresta}')
                    # sleep(0.5)

        self.janela.exitonclick()