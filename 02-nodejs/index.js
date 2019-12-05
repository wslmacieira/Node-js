/**
 * 0 Obter um usuario
 * 1 Obter o telefone dw um usuario pelo seu ID
 * 2 Obter o endereço do usuario pelo ID
 */

function obterUsuario() {
  // quando der algum problema -> reject(erro)
  // quando der sucesso -> resolve()
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
        return reject(new Error('DEU RUIM DE VERDADE!'))
        
      return resolve({
        id: 1,
        nome: 'Hercules',
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario, callback) {
  setTimeout(function () {
    return callback(null, {
      telefone: '9999-8888',
      ddd: 11
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000)
}

const usuarioPromise = obterUsuario()
// para manipular o sucesso usamos a função .then()
// para manipular erros usamos a função .catch()
usuarioPromise
  .then(function (resultado) {
    console.log(resultado)
})
  .catch(function (error) {
    console.error('DEU RUIM', error)
  })

// obterUsuario(function resolverUsuario(error, usuario) {
//   console.log('usuario', usuario)
//    // null || "" || 0 === false
//    if(error) {
//      console.error('Deu Ruim em Usuario', error)
//      return;
//    }
//    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//     if(error1) {
//       console.error('Deu Ruim em Telefone', error)
//       return;
//     }
//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//       if(error2) {
//         console.error('Deu Ruim em Endereço', error)
//         return;
//       }

//       console.log(`
//       Nome: ${usuario.nome},
//       Endereço: ${endereco.rua}, ${endereco.numero},
//       Telefone: (${telefone.ddd})${telefone.telefone}
//       `)
//     })
//    })
//  });
//  const telefone = obterTelefone(usuario.id);

// console.log('telefone', telefone)