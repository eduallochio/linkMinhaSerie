import avatar from '../../assets/avatar.png';

function Profile () {
  return (
    <div id="profile">
      <img src={ avatar } alt="Logo da pagina e canal Minha série em cortes." />
      <p>@minhaserieemcortes</p>

    </div>
  )
}

export default Profile;