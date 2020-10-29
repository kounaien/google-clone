- material ui
- react router
  route path はそのパスで表示する
  link to は a タグ生成
- css  
   text-decoration: inherit;
  min-width: 13vw;
  flex-direcition: column;の中の img タグはセンターに寄せられる h1 などは左端
  input:focus{
  outline-width: 0;
  }
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background-image: -weblit-linear-gradient(top, #f8f8f8, #f1f1f1);
  Button varient='outlined'

- hook
  const [input, setInput] = useState("");
  onChange={(e) => setInput(e.target.value)}
  react router dom

  - history

- <StateProvider initialState={initialState} reducer={reducer} />
