<template>
  <div class="cuerpo">
      <form class="crear_tarea">
          <input class="input_valor" type="text" placeholder="Añade una tarea" v-model="tareas">
          <button v-on:click="crearTarea">Crear</button>
      </form>
      <div class="errores"></div>     
      <div class="tareas" v-for="(i, index) in tareasTotal">
          <div :class="['tareas_i', i.estado == 'Incompleta' ? 'tareas_i' : 'tareasC_i']">
              <p>{{index +1}} - {{i.contenido}} - {{i.estado}}</p>
              <div>
                  <button class="i_ok" v-on:click="completar(index)">OK</button>
                  <button class="i_x" v-on:click="eliminar(index)">X</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                tareas: "",
                tareasTotal: []
                
            }

        },
        methods:{
            crearTarea(e){
                e.preventDefault();
                
                const classHtml = clase =>document.querySelector(clase);

                let errores = classHtml(".errores");

                if (this.tareas.length <= 4){
                    let err = "<b>Tarea no Valida</b>";
                    errores.style.color = "#f00";
                    errores.innerHTML = err;
                }else{
                    let err = "<b>Tarea creada</b>";
                    errores.style.color = "#0c0";
                    errores.innerHTML = err;

                    this.tareasTotal.push({
                        contenido: this.tareas,
                        estado: "Incompleta"
                    })
                    this.tareas = "";
                    localStorage.setItem("lasTareas", JSON.stringify(this.tareasTotal));
                }
            },
            completar(index){
                this.tareasTotal[index].estado = "Completa";
                localStorage.setItem("lasTareas", JSON.stringify(this.tareasTotal));
            },
            eliminar(index){
                this.tareasTotal.splice(index, 1);
                localStorage.setItem("lasTareas", JSON.stringify(this.tareasTotal));
            }
        },
        created(){
            let db = JSON.parse(localStorage.getItem("lasTareas"));
            if (db == null){
                this.tareasTotal = [];
            }else{
                this.tareasTotal = db;
            }
        }
    }
</script>

<style>

    .crear_tarea{
        display: flex;
        justify-content: space-between;
        margin: 20px 0 30px 0;
    }

    .crear_tarea > input{
        width: 80%;
        height: 50px;
        font-size: 19px;
        border: 2px solid #ccc;
        border-radius: 8px;
        outline: none;
        padding-left: 5px;
    }

    .crear_tarea > input:hover{
        border: 2px solid #999;
    }

    .crear_tarea > input:focus{
        border: 2px solid #999;
    }


    .crear_tarea > button{
        width: 17%;
        border:none;
        background-color: #01f;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
    }

    .crear_tarea > button:hover{
        background-color: #01f9;
    }

    .tareas{
        margin-top: 20px;
    }

    .tareas_i{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f20a;
        padding: 10px;
        border-radius: 10px;
    }

    .tareasC_i{
        background-color: #0af;
    }

    .i_ok, .i_x{
        padding: 10px;
        border: none;
        cursor: pointer;
        color: #fff;
    }

    .i_ok{
        background-color: #0e0;
    }

    .i_x{
        background-color: #e00;
    }

    .i_ok:hover{
        background-color: #0c0;
    }

    .i_x:hover{
        background-color: #b00;
    }

</style>