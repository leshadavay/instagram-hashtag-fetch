
import React from 'react';
import ReactDOM from 'react-dom';
import { Masonry } from "masonic";
import { styles } from "./theme";




export default (props)=>{
    
    const style = styles({
        masonic: `
          padding: 8px;
          width: 100%;
          max-width: 960px;
          margin: 163px auto 0;
          box-sizing: border-box;
        `,
        container: `
          min-height: 100vh;
          width: 100%;
        `,
        minify: ({ pad, color }) => `
          padding: ${pad.md};
          background-color: ${color.dark};
          color: ${color.light};
        `,
        header: ({ pad, color }) => `
          font-family: Quantico, sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: -0.075em;
          color: ${color.body};
          top: 0;
          position: fixed;
          padding: ${pad.xl};
          z-index: 1000;
          width: 100%;
          text-align: center;
          transition: padding 200ms ease-in-out, background-color 200ms 200ms linear;
        `,
        card: ({ shadow, color, pad, radius }) => `
          display: flex;
          flex-direction: column;
          background: ${color.dark};
          border-radius: ${radius.lg};
          justify-content: center;
          align-items: center;
          transition: transform 100ms ease-in-out;
          width: 100%;
          min-height: 100px;
      
          span:last-of-type {
            color: #fff;
            padding: ${pad.md};
          }
      
          &:hover {
            position: relative;
            background: ${color.light};
            transform: scale(1.125);
            z-index: 1000;
            box-shadow: ${shadow.lg};
      
            span:last-of-type {
              color: ${color.dark};
              padding: ${pad.md};
            }
          }
        `,
        img: ({ radius }) => `
          width: 100%;
          display: block;
          border-top-left-radius: ${radius.md};
          border-top-right-radius: ${radius.md};
          display: block;
        `
      });

      const FakeCard = ({ data: { id, name, src } }) => (
        <div className={style("card")}>
          <img className={style("img")} alt="kitty" src={src} />
          <span children={name} />
        </div>
      );
    
      let data =props.data;
        let render_items = [];
        console.log(data);
     for (let key in data){
        var shortcode=data[key].shortcode;
   
         var caption_text= data[key].node.edge_media_to_caption.edges.length?data[key].node.edge_media_to_caption.edges[0].node.text:'';
         caption_text=caption_text.substring(0,13)+"...";
         var src = data[key].node.display_url;
        render_items.push({id:key, name: caption_text, src:src ,href:shortcode});
     } 
   let items =[  { id: 1, name: 'aaaa', src: 'data:image/jpeg;base64,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'},
                 { id: 2, name: 'bbb', src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVFRUVFRUVFRUVFRUVFxUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0dHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0uLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EAD4QAAEDAwIEBAMGBAUDBQAAAAEAAhEDBCESMQVBUWEGInGBEzKRQlKhscHRFCNi8AdykuHxM0OCFRc0g6L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAfEQEBAAIDAQEBAQEAAAAAAAAAAQIRAyExQRJRcWH/2gAMAwEAAhEDEQA/AMEyyRjbq2NIIL25VTJOi1pbq2p0hCAwQmWmAriStzRSXwACnatZKh0lMHKDcLlWhKPRZAmPovN4jTmCc7REn/dAK/AISV3ha0WT3CW0nRE5hv1DoIVdf8GqkE/Bd7Q6P9JKX6x/p6v8ZNtxJXnVV27tNJQAEU4VuSXbKFCxcVbWVmC7Ks7ugKYBCjSlM+wAZ5t1U3FMQrq6utQhVV0QEaCvDYR2unmgVqyBTflQozWZB3UA9TDS44RP4c9EjaT/AA24aK161zh5KINV3SW/IP8AUR9F9N4txEi3c1mXvcWN5znJPYGf9KyX+HVNrLa5eDBLqbCekBx/UJWpx86mtnMOkg8y4j2OT9Ur6NbaK64vWptFOi0veBEACNXMvqOIE9GAwOc7LN1vDnEqpL3Wuo9Xvo49CwgD0W28O3NNrQ4BjQBBfOp57MbnbqU1xfxHb0mhuk1ahyKc7DmXmdLW9z1GFsz3Z5Hz234TcUz5wB1iTHuBCtqNYmB/wqjiXil1Z5aG02snamAG/Ub+qbtqukajsMlLcq9Vkb2jD3Do4/mgaFY8UrNfVqObtq/TdJ6VwZdXTrncCDV5zUXSvEJbPReERq44LrSnSRcFAo7ggOCJSsdC8QuAqSZIwvEKUL0INABeIU4XQEbJsjVQ2GSgkpmzZK04s/1WeeOoPTblSuQQE5QohSvLfC78fHJfVPSokrlG3OpW1CjhFtLfzJp2lQtjCc4BwxrX1K5bqc0ta0gDyyDJhFeYwmrMwyoBudJgieoOOajk8Vh6co1tXODO2R/wmYj9Y/NZvh90PiRJHXENge601Mg7Pn3wsfy12R4lYUawiowOncwAR3B3B9FkeMeCol9s/Vz0Pwe4aevqt6aR57dolDqU+kgntHp2U9zw9y+vlbGFnle0td0cIP4oV9V8sEr6Te2THeV7Q4DrynodwVi/EnhtwDqtGXsHzM+2yNzH2h6LTHkl6qbiyFZ0CVV3j5TdzV+ihb0g+dwUW78EmijaEhHtbZhOTsCUUW1QFzInp33Mt67FQp0SHAtzjUQMwNzv0GfZLSkrRoJPIjZHZcBrHPMycRiD+yu7GzpCrpDgW1KTnaoJc0nURrHIgx7OCDxThDdADWQZIqPnDXbyf6TMg9PZP4X074FupoXI566TvbIKWuOFH4r3t/6epw7t2gT7n6L3h7h1Sg57SYc8BpblpMEEfnM9JVpwktjz/LpNR0mGgNAc3V6j843Wf1fgDC8RT+IWtaYcZgCeQ05LuSrOOcYpuBo0g/4bcEiG6yObjnV2GwWi4xVptp6NQL3NLiebqjyZdjZoh2OflWSurUMfoH2RDtoaTycRgH9uSd6gnpNrtB9In3V3wrxA35XCWncKm4qBpkcyqljTI9VMXWvvODaC6rTzTfmN455KryFouBXQdQfTOxafqqBwWHL604/EIXCFMBehZNAHtQwmSEB7VUpVJqg9q60opal4ChCk0IrmKIaq2nTkL0IgC9CNgOF5ShehAaaE7ZGEoAmbXdPi6qeTxcUHKVy7CHTXquV6WN6cOUSt9k7bsAVdbHKuaDMK0oFklToHzFpMamEfkcfQrrjCSdVOsOHIgj2U5To5Wf409zKmph25bxmYyrjhXiJ+n5j+Ee/IL3HuGNgvYBDvMPeDCzjIbkzj7IJaPw/RYb1XRrcbq24g95BFT/8AOP8AdX1Ou/npI6Rn81kuDcTgCRSpiN5c53uTBP1V43ilM5DwfTSJVXXxGqYu2BwLgHCBiDMQqywqkEyDJMtneeh69ldWdZhIyO43St/Yj4rXMIyMj9QFFxVt8z/xD4JoP8VRbpY6PjMH2HkwHAdD+BHdL+ErJr6VRziNIGZGZIMR3ifcL6JxCnrJpPYXteIMADB5mcn26CFmn+H6drMPGkaQ5urrqIn3BE9I7oxy1RZuEhw/4derTaWmKRq0tRBwASGzOMnfkqlwYKDK1LBp1NLmv3GvVy+6WEn6onHr4srUrqngFmk9CfM10Ccam56eYK8teB0q1prpkkl+vJy8NGggd9OqO+6169Zs5fVtFVlR2pkh9MSB5HcpA3GWSOhdEYispXpFV1Os10GQSCQWyA0OE9w3fH4LZWdJhDqdYgO1BrpAcwVAPhucZJLZJ1bwSTsZjPcb8M1wQ4PGvVJEkjUcPc10bS0b8iDzhTVRpbGo1gLZ+QtIJJ1AsBdpIOw2x1bGOQppVREkAmmxzHeVx0lzg0u6hzGyeU+ipeHcWqOAD2fZLHOdu3SAD/lGuI32OOSseJ03NoCoTLvO+pE4c4Fh0z9klrnjcyD0UVUI3tv8Su6sI0YDRkBrvssjsOXU9ECnQcRgAudtDdQEyRA2BIE7Sj21AhgJcQ3ykHc6iwSB95x5D9iRwXPl0iWtHzCZc6AZ1O6ARtjfoo20JV6DWs8+kby92p7z2Y0Yn6ELP3bTM6XgcpZGPqr+oQc7RjVnUB1HT3S3EabXM8nmPUkkolgsovCriGESciFwZSNiMj8cq0e0A4WHJGuFChcIRIXCFi1BchvCK5DJTIIIzENwUmFOlE3BQhGIUCEodQXlOFwhUlAheAUoXIQGmhFoOgqIaphqWOWqLNrOm/CO1khV1F6s7Mru489uTkw0LbW2Vc06OEC2pBWjW4XVHOqboABUN7ehsq84oMFYbijiSQEqcX3BuMCq11uYLidVPv1b+qr76loJD2wDzjBVJw5j6dRlQbtcHD2Mrem8oXFUMPlJyWHrGS3sVz5xvhWXpadWHYxg/wB/urNvEiBu0AcmtJ/5UfEdnSa/yQ2N4Iz+y54Oez+IFOoRDvlJiJUT1rvra24DWa94aask55xpOQRyG3JbGjQp8yTGxE/ruqC48OspV9bQdJ+wN87x2Un0vhH4dNziZJA5hp3Ek5jOMbrRlvZq+YDluoaXA6vQiRntn2VZxWhRqn4VQNJbDp1RI1DtAw4748wnqrV1QMa5pEkjJDZ1Dvjv/fOkubdsmprEupuDiPlcIEh+5HJwP9Pul0TNeKbJotnU4hxe57dX/bbJJYSDDXFxaB79JT3hGoG0W0S6KjW1HhhxLnPcQ2eRDWH3gonHWu+G4MadcBhk4ADS1lQOI2DoBO0Z9aW3t7ihbtu3NIrUKzn1mEyXUXgbmcGGuzy0AbiE5Uk67nu1sc4sqffLPOKtLSwyW83NG2xgnmm/FFzWq2bKzZ1ggVHMnRUBZ8MmmJwPKdtwQ7CavLinS+HdNDdFR4fjILXNDSXRmm7Ok8vIdpEVvDr4u/i6L26Wzik4YbW1EU5Iw3UTOobucRzCDLUOEMApXXxSAWNwB8zm7Eg9YgjtMmVY8PPxqVOm0EkaQBOxpuEST0+I6cZkT2WtqjTYNEny62SQer9JB56Whwx98dMLeAr0muQHEaiS3Ew4lw254dPTyjog1ze3AbcNYQHMY0hrRIJIcBUfPIS0Nkny6SBsFWXTaUksdJJjS2NOQNXpmciREZO6tvFvBC6sGMJaxrQXTnyg/wAvUT8zpOB785So8NtpkHMTIaDLnmBG4zuMQR+sZKxqjqaYgGAIGSM79s80tI9o6fqrTiNu0GC0h2ZLgZn0SNa1gHVgwN5WNbSFPLIP9lWPxw5oVHVqy7sn6O4Sy8GPpwqBU1ArnboPCCUUqOlMI6VEBMMauOYjZadprxavMRSEACFwhEIUCmSELhCmAvEIJqw1ShelcJWe1PAJ6yq5SErrakLTjz1UZ47jX2dUFWjchZDh93lauxrSF6XHyfqOHkw/NU/GgYKyf8NLsrecRZKyt2yHLZmTdbgKy8OWAfctq82McCOp5fgq+6GMJjwneup3DSflJ0unoVnnNxeNUniZlX4jwGxnb9VWWpewt80GQWmY58ivpnjDw+6p56IGe8L5nxenUpn+Y2CDABXPp0TJ9j4fdfGZTD3HUADsCdvvDcI9aiC7VA8u55n9lkfC5c2i2o5zgHCA0gEieeDkei0lKuOhEgacOz1noquTPWnripkFjjHMbyfu56iVX340NLACTMkAMeRMgOLDl09pTtFzWh23XkfxPTkqG/uqlfULcawJhzg0gEE4MZ9CkBb21PwCXnDRILQ5oLckgsOWZ05HKB2SfgXiTLgupVDqL5a5vY69ZA6ua4ie3KM2vhq5e5ho12jUNifldP3SMAweojksDxW1rWV+DTmmdcsMT5XGNvte2/Lkq6JYcXpVKXxLB0gtc9tF7G6tdIgudSIJ21vEHfPQYyraj3VpMz8lUtJEmnLtRG5LTpcNydIGdl9m8ZcIZWoNr6YqBoqMqCcPLAJ/y5J7+5XytlCpTuNTW6nNGshrSdbm1XM3GCHNLj6QRJEIDQ+CeHA29ai4gua47Q4ScGZ3aSA7Bktb3Cy/B7U2vEW0xt8TSIM+Wdp/ykfVaKlxIUaLKrWvHxW0qTmnBGl5FPS+Nwx5EHfT/SrPxJUp29q26axpquBBfA3aHFh6gYA/Dkl9VPB/E/iinScKNJnxbgyXDI+GCIBc7rBdABHzHrnLuq8RcNbA12JDZEtHRo05jvlF4T4euG8Pfe6S51ZrnfEkFwdrg+8/mh+DuJvefNvqLXcoIj908tybE1vSnZxmtUJHwgajfmEme8TiVWXNW4qEgjT22j1V1xJmnioDebhqju2Sceqs/EdqGuacZGIHWOW6yt+yNZP+sSwQdLvwVxaswpC0Dsxt1TVOl3WOeW40wxBcoQmXUihFqxagkLoapwugJBEBSLV0hdCDChTapOaoKkvOCgWo0LmlIAhq8QilqiWpk0ZK9KiVJgWej2kAuFqIAp6VUxG0aDoK0XC7tZ9rFZ2AXTwZarDlx3GhmVU8TtRunKT4XL5stwvQlcVimo2upF/g9JkJWjcFroKs/jagmFpwu7eQ5rjg7CFnuP8ABxWB8skO26q6tKkQSYR64h2XADcdVhnNVrjSnDeHhlNjDpEbdux7d1Y3VMAeUBpcJPOT17KFlVD3ETA/vdPvojmZjHL8xuVn4tXU6ReIMgkfNGfpKcrUKVrS1vLWhoy52B32yCT7JG84pRoZe9og4bMHH4qlvg+8uAa1QFjAXCjmRhulxb083PMgKsZtOV1D9v4qzNG0rVW7E+RrTnaKhDh1zySnGrqyu3UxeUq9m4EaapaC05+Vz2y2NzuFaeNberbcOdXot+XRmAYbqEk9s/iqrw7UF5altQYfTa7rEicE9CnZ1v4Us8fQ6/BCbdtOlUkBrSwnzTpMtk7kECCeixHiLhlWGvGlj/5bdjAIdpa4kcxLgN9h1S/+GPjX4Ln2Fw4nQ7+SSc6fuD0PLuV9E4rwxr55649JEbD0A+ietE+MeJxNASZgzHmEkiCRqyBlxicGcmV3xd5uFMAEmWERsBMnl69FdcesHObVaWiRvECXB5MkRkGQces7AUT7tp4dUoucA5jSGjAJbBAiexhZ26yaybxD8H+M3/wrbN7vIwggGJG5gf0ySf8AhO3vGbdgNQBoeMyBBJiM9T+y+dcM4aKjg0VNIIBmNuR2yIMfULa23ga3ZpfcXeqchg+Y5jeT+AV5av1MlnelX4YtnV7l92/DWyZcDEx5R65mEz4i4jqd5YIaOWSOe/8AurHi3FqVNnwKDfhsEiDAc47S4fqss3+Y6DJ6j9M8lnnZpphDNC61tH6I4auULYNwBCNpXJne3RjEEN5RShPChYZC6AvAKcIATiosKk9q9TagJgITgmmtUKjESlUaQUi1eYEYhOlC0LhaiuauAJQ1w0o7AlGHKcpppTARAFxoU4RsPAKz4WJVc0Kw4c6CrwuskZzcWjqaKKciEWjlHFKF6GOXTiyjN3lnmUxYsGxTN/AQLRwWkqbDzqGMbpAv0O/mZ781bUgVO4sWuGUXVEuiXDw2C8GBzxmPVUNze3N1VNG3MN2kGJ9SrWpwp5loJAO5JxHdaXgPA6VBnlAJO7goskVLtmuB+BB8Rrrhzi5rg/sdJB355T/jixFtXp34b/Kc34Vcjdv3HHoO/WJgSRqbkGA5u/vPshjiA0FlZodTIOqcjTsZEfglM+xZ0r28Uo17Y0i4Fj2wWnLSOYI5biQVmL26trKg5tMhvlDWjeGjAzzMLvE/AFu52u0vX0Gn7ElzWgTLWmZaBJwkf/bu2bL7q+dWDYIDSS47+WSTBJEIv5/vQkrF+HWCpXfUc0+f/pvidLw9r+ZnLWEc/nI9PtnhfxKy6pBrfmZBdy04OOk8tzuqe74Laup6KLQxgADA0eYOmNTnbfdwehJztlPCFUWj7p7i4tNZtNp3OojzOJ3jP580Zcn6niphpseMQC97QC/JHIlu5B7B0n3C+X+K6TZdLdIORAIgnP8AY7reHiAqNLuRAzyiOR58vVYfxJQPmAyDMdguPLk3XXjx6jI8Hrik8EmW8tok9Z5Y/Bae4uvixMObsCCGgRzAH/CzFhThxY4T+B7pt74OhrDyDPtE9SRyEwtP1uo1qHq3Dg7DJBJmOg/fPNWVjZNptx5j2z+Oylwi1g6rh4c45LM6R0mOXqrW5umRDXtb2a1x/ENj8VGWW14zSqfTduRA7wPx2QHtH3h7SUes5h3e499I/VyCW0vvO+gXPWsQ0t+9+Cg+l7+iOKLDs/6iPyUalIt/cbI0CsLqKc+qGWpBGF1rVNrVPQlTjwXnBeXQlswIRWFdcxQOE52lJzUIowKE9APs3TlIpUBHppwqcplEQKRTAKCTYjU3QgNU5TC7s7pWH8UIWapPhH/iCt8ebXrHLi2euiHJZtMg4QqVQyrq1pAhdHHybY54aG4Y6d1ZEgd0iGxsuNqFb7Y6GrUtSYtLo02xpn9l6ipVYhL04qOI8auNQZRp6e5O6btqNwW6qlNsnJgA565H7py2a0dD6p8XE857DKmqZqq0MY4l0NaDJdJg7xkgSg8K4aKjvjOdqA2jEgcgP+J7rRvpUXkTS1kGQQJg9iJgpqlbgN0gNpDuQSO+MfVTo9s9cl06NRGACTH0G2fm2k5KUp8LoOtazaDxUqS4lzSHFtQAAAn72AmON8DOqTfmnMRFNuo7/UFA8N3rKTy1tS4qU3+aBbw1mkgFuBlxnvsdlPqpdMpbVAKYzlrZLY80gmfaCqfjN+SDpYRGQ4kNiMZGZ/2HUr6jx7wFb3GqpT1U3PlzvmAc7OXNkdV8o8TcFrW9QUzoLSS0VA7UzzGBqG7cgJzDH3Xav3b1b0T8KcKdXc65ePIwOg7AkgjYbifyKGOH1NbtI+GCDDvmrHPLnEfRfTq1hSoW9GhRc1jG0wA52nW92NTo2JOThV7rOlSbqG8zIluT33U5YWU8ctxT8E4YACS3T/VUgz3JcceiNd2DolrKbwdsVWk+gkT6oF5xIExJaeTgYI7T07HHcKur1y3Jls/92l5ZPIPZgfSOuVhlptNo16QmDSeI30ODo9oMe5QRRYdnx2e0j8RKZ/8AUXwPiBtZmwdsR2Dhlvpgopa1wmm6RzbUgkf+XL8u84WVk+NJaUdQcMxI6jI+oXWP5HIU2mDzY73+hU4B3EHqNj6j9lH+GA+lzGyiWJttOMFCcEtgNrF2FILjkqYRC60KLlNqnZpNCDWajtXqzVUpUnTcpOCgRBRAqqYelFpOQCV1jlMM9TKZYlqBlMBVSgwCkFFjlJECTUQFDapIAjCtBwt0hZ4K34VWhbcN7Y8s6XNVmEBoTesEJVxXobcYwqwlrq6K6SEjf1oGMd+f15JGi/iOjL3Bvb5nf6eXuQrHhHGWVeRdmJcZH0wJ+pWJvaYEvqu0tHIzn1jJP9Iz3aMpNniFzYbSBYNhtrIPphgP3W78yecW69XMd+PtdO4bEE/+I/bl7rxtiTPy/wCX5v8AWdh6L55wPjhadLiNTRL8+WkNjrP3uw9MnC1Nr4hY+NJwTAJwXECST0AGT0TKyrt7ABAj1iTJ/Eqvt7BwdLqj3DeNQaB7NGfyQP8A1pp2MiYHc8z/AH1T9CvqR0SXE6TyyGsL+fzkZ5LEeIPBVxew17m0qbXYDWy53ck+63DqpGxSN5xh4aQPqr3E9qO38MULSm1rRqLcankuJ+u2wws1x7iAgt25J7i/FnZk9VjOJ3usmd+vfusuTLbbjiuvq2fUf7IVteFuN2ndp2I5oFWSVALhyt3t1zxZzoOpnyu3Bz7OHMYMenUIzD9tmOo+727hIWtaMHY7+nP9D7Jq3dpP4HuFFqosGEOAnbYH7p6d2/l+c/h4zywhUmwSO3+4TrRLe4z7JbMJucfT9kCo1MEL1Uc+v580rQU0rjgjFqG8JGVepUivVWodJ2UgK4ooyEIhTagF67UJjk1VEpJ4VyoqwXQvBFaEaGzFsU7GEhRMJ9hwqJ5pRQUBFYkYzCukqLVIoDrSnLSpBSTUakr472jOdL5t3hI3XEQOaTuahAWeurh0nK75k5LivK3GoxKG/i406j7fv69Pr0WWc4k5ONz6DJS93XcYHv8AXb6CAn+i/I/FL41HSTtsOQ/v8VGnTdTIa3/5FTMkx8FhEzPJ5GSfst7nA7ERNVwBFONLTkOqOnTPYQSeumOaFXqODCZl9WS5x30zkT/UZn07rPK/WmM+DsuQYoUnRSb5nvj5y0HVUI6ATpb+pVyy8c2mIkOq4Y3m2iDger3ZJ/p/qVHw21kNZzrOAJ6U2u/Vwn/6x1VvTqaqhfsADoH3QBppj28q57nW0xXXDLo6onDBHqeZ/wBR+kLc8MuML5zw3BWv4fcYWnFntny4tFWuFScQuApXNzhUV9cro2w0puOVN1lalMkrRX1Sd1WPaFNXKQfSwk6oVs8KvuWLn5JHRx0GkVYs2ae35Ej8oVdRCtKLcD3XLk3h6hsD7f39U3T6/wBwlqLfLP8AV+icohRaaFRigdvdN1RgfRLOCAEQoEKbghEoAVduEuxmU05RaEG7pUSFIuUU4VDclazU29Cc1OFX/9k=' },
];

    return (
      
            <div className={style("container")} >
                <div className={style("masonic")}>
                    <Masonry
                    // This contains the data for our grid items
                    items={render_items}
                    // Adds 8px of space between the grid cells
                    columnGutter={8}
                    // Sets the minimum column width to 172px
                    columnWidth={172}
                    // Pre-renders 5 windows worth of content
                    overscanBy={5}
                    render={FakeCard}
                    onClick={props.clickItemEvent}
                    />
                </div>
              
            </div>
      
    )
}
