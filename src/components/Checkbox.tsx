
interface Propstypes {
    label:string;
    type:string;
    onChange:()=>void;
}

export const Checkbox = ({label, type , onChange}:Propstypes) =>{
    return (
        <div className="flex gap-1">
          <input type={type} onChange={onChange} />
          <div className="text-white">{label}</div>
        </div>
    )
}