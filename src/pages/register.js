import { useState } from "react";
import { register } from "../firebase";
import { useDispatch } from "react-redux";
import { login as loginHandle } from "../store/auth";

export default function Register() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Hataları göstermek için bir durum ekledik
  const [loading, setLoading] = useState(false); // Yükleniyor durumunu göstermek için bir durum ekledik

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Yükleniyor durumunu başlat
    setError(""); // Önceki hatayı temizle

    try {
      const user = await register(email, password);
       // Kullanıcıyı dispatch et
    } catch (error) {
      setError(error.message); // Hata mesajını duruma ekle
    } finally {
      setLoading(false); // Yükleniyor durumunu bitir
    }
  };

  return (
    <form className='max-w-xl mx-auto grid gap-y-4 py-4 mt-20' onSubmit={handleSubmit}>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          E-posta
        </label>
        <div className='mt-1'>
          <input
            type='email'
            name='email'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            placeholder='you@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Parola
        </label>
        <div className='mt-1'>
          <input
            type='password'
            name='password'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            placeholder='********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <br />
      <div>
        <button
          disabled={!email || !password}
          type='submit'
          className='cursor-pointer disabled:opacity-40 px-4 py-2 w-full text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Kayıt Ol
        </button>
      </div>
    </form>
  );
}
