import json
with open("inventario.json","r") as j:
    invent=json.load(j)

class ObjetoInventario:
    #Atributo
    inventario=[]
    #Constructor
    def __init__(self):
        self.inventario=invent
    #Equivalente a Override
    def __str__(self):
        return f"Iventario:{self.inventario}"
inventarioFinal=ObjetoInventario()
class InventarioJugador:
    #Atributo
    inventario=[]
    #Constructor
    def __init__(self):
        self.inventario=inventarioFinal.inventario
    #Equivalente a Override
    def __str__(self):
        return f"Iventario:{self.inventario}"
    
    #Buscar objetos por energía máxima
    def buscarPorEnergia(cls,max_energia):
        cumple=[]
        for cada_objeto in cls.inventario:
            if cada_objeto["energia"]<=max_energia:
                cumple.append(cada_objeto["nombre"])
                cumple.append(cada_objeto["energia"])
        return cumple
    #Utilizar un objeto
    def usarObjeto(cls,nombre,elemento=None):
        encontrado=False
        eliminar=False
        coincidenciaElemento=False
        numEliminar=0
        for cada_objeto in cls.inventario:
            if nombre==cada_objeto["nombre"]:#Si se escuntra el nombre del objeto:
                if cada_objeto["elemento"]==elemento:#Si coincide con el elemento buscado
                    coincidenciaElemento=True
                if elemento==None:#Si el elemento es nuso
                    coincidenciaElemento=True
                if coincidenciaElemento==True:#Si coinciden los elementos o si no hay elemento que tener en cuenta
                    encontrado=True
                    #Para prevenir errores, he puesto qeu si hay una cantidad igual o inferior a 0, no se encuentra ni se usa y se borra de la lista
                    if cada_objeto["usos"]<=0:
                        encontrado=False
                        eliminar=True
                    else:#Si la cantidad es correcta se resta
                        cada_objeto["usos"]=cada_objeto["usos"]-1
                        if cada_objeto["usos"]==0:#En caso de que se agote, se determina que se elimina de la lista
                            eliminar=True
                            numEliminar=cls.inventario.index(cada_objeto)#Se guarda su posición para eliminarlo
        if eliminar==True:#Si hay que eliminar algo de la lista se elimina mediante su posición
            del cls.inventario[numEliminar]
            #del sirve para eliminar un un miemvro del array sabiendo su posición
        return encontrado
    
    #Consultar usos disponibles
    def consultarUsos(cls,nombre=None,categoria=None,elemento=None):
        usosTotal=0
        for cada_objeto in cls.inventario:
            #Si la opción es None, no lo busca y pasa de ella
            #Si tiene la opción y no coincide, ya no sigue en ese objeto y busca otro
            if nombre!=None:
                if nombre!=cada_objeto["nombre"]:
                    continue
            if categoria!=None:
                if categoria!=cada_objeto["categoria"]:
                    continue
            if elemento!=None:
                if elemento!=cada_objeto["elemento"]:
                    continue
            #Si el objeto ha cumplido con todas las condiciones, se le suman sus usos al total
            usosTotal+=cada_objeto["usos"]
        return usosTotal
    #Estrategia de sobrecarga
    def estrategiaSobrecarga(cls):
        listaCatEnergia={}
        listaCategorias={}
        listaNomCAt=[]
        mayorE=0
        for cada_objeto in cls.inventario:
            categoriaEncontrada=False
            for cada_categotia in listaCategorias:
                if cada_objeto["categoria"]==cada_categotia:
                    categoriaEncontrada=True
            if categoriaEncontrada==False:
                listaCategorias[cada_objeto["categoria"]]=[]
                listaCatEnergia[cada_objeto["categoria"]]=0
                listaNomCAt.append(cada_objeto["categoria"])
            listaCatEnergia[cada_objeto["categoria"]]+=cada_objeto["usos"]*cada_objeto["energia"]
            listaCategorias[cada_objeto["categoria"]].append(cada_objeto)
        posicion=0
        posicionMayor=0
        for cadaNum in listaCatEnergia.values():
            if cadaNum>mayorE:
                mayorE=cadaNum
                posicionMayor=posicion
            posicion+=1
        return listaCategorias[listaNomCAt[posicionMayor]]
    
#Inventario que va a ser el json
InventarioJugador1=InventarioJugador()
print(f"Ej1: {InventarioJugador1.buscarPorEnergia(5)}")
print(f"Ej2: {InventarioJugador1.usarObjeto("Pocion de fuego","fuego")}")
#Comprobar funcionaminto del ejercicio 2
#print(f"{InventarioJugador1.inventario[1]["nombre"]}:{InventarioJugador1.inventario[1]["usos"]}")
print(f"Ej3: {InventarioJugador1.consultarUsos(None,"recuperacion",None)}")
print(f"Ej4: {InventarioJugador1.estrategiaSobrecarga()}")

