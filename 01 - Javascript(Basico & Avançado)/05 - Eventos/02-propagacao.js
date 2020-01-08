
	<body>
		<div class="container">
			<button id="btn1" onclick="clicar()"> Botão 1 </button>
			<button id="btn2"> Botão 2 </button>
			<button id="btn3" onclick="alert('mundo');"> Botão 3 </button>
		</div>

		<div class="container">
			<h1> Propagação de eventos </h1>
			
			<div id="d1" style="background: red; padding: 25px;">
				<span style="background: yellow;">Texto dentro da span</span>
			</div>
		</div>


		<script>
			var btn2 = document.getElementById('btn2');
			var btn3 = document.getElementById('btn3');
			
			btn2.onclick = clicar;

			function clicar(){
				alert('clicou');
				return function(){
					alert('clicou2');
				}
			}


			btn3.addEventListener("click", function(){
				alert('clicou com dom level 2');
			});

			btn3.addEventListener("click", function(){
				alert('clicou com dom level 2 com outro evento');
			});

			btn.onclick = function(){
				alert('ola');
			}
			btn3.onclick = function(){
				alert('mundo');
			}


			var d1 = document.querySelector('#d1');
			var d1Span = document.querySelector('#d1 span');

			$d1.addEventListener('click', function(){
				concole.log('click no $d1');
			});
			$d1Span.addEventListener('click', function(){
				concole.log('click no $d1Span');
			});

		</script>
	</body>