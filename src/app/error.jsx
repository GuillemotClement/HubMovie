'use client'

export default function GeneralError({ error, reset }) {
  return (
      <div className="grid place-content-center min-h-[calc(100vh-theme(spacing.32))]">
        <h1>Erreur</h1>
        <p>Une erreur s'est produite</p>
        <div className="">
          <button onClick={() => reset()} type="button"
                  className="bg-yellow-300 hover:bg-yellow-400 rounded-md shadow">Reset
          </button>
        </div>
      </div>
  )
}