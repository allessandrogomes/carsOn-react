import packageJson from '../../package.json'

export default function MaintenanceLabel() {
  return (
    <div className="fixed left-0 top-0 z-[10000] w-[261px] bg-yellow-200 font-bold">
      Projeto em Desenvolvimento v{packageJson.version}&#128679; Última
      atualização {packageJson.lastUpdate}
    </div>
  )
}
