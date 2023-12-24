import {VisuallyHidden} from '../VisuallyHidden';
import {useReducedMotion, useSpring} from 'framer-motion';
import {memo, useEffect, useRef} from 'react';
import {delay} from '../../utils/delay';
import {classes} from '../../utils/style';
import styles from './DecoderText.module.css';

const glyphs = [
    '清', '风', '徐', '来', '水', '波', '不', '兴', '举', '酒',
    '属', '客', '诵', '明', '月', '之', '诗', '歌', '窈', '窕',
    '之', '章', '少', '焉', '月', '出', '于', '东', '山', '之',
    '上', '徘', '徊', '于', '斗', '牛', '之', '间', '白', '露',
    '横', '江', '水', '光', '接', '天', '纵', '一', '苇', '之',
    '所', '如', '凌', '万', '顷', '之', '茫', '然', '浩', '浩',
    '乎', '如', '冯', '虚', '御', '风', '而', '不', '知', '其',
    '所', '止', '飘', '飘', '乎', '如', '遗', '世', '独', '立',
    '羽', '化', '而', '登', '仙'
];

const CharType = {
    Glyph: 'glyph',
    Value: 'value',
};

function shuffle(content, output, position) {
    return content.map((value, index) => {
        if (index < position) {
            return {type: CharType.Value, value};
        }

        if (position % 1 < 0.5) {
            const rand = Math.floor(Math.random() * glyphs.length);
            return {type: CharType.Glyph, value: glyphs[rand]};
        }

        return {type: CharType.Glyph, value: output[index].value};
    });
}

export const DecoderText = memo(
    ({text, start = true, delay: startDelay = 0, className, ...rest}) => {
        const output = useRef([{type: CharType.Glyph, value: ''}]);
        const container = useRef();
        const reduceMotion = useReducedMotion();
        const decoderSpring = useSpring(0, {stiffness: 8, damping: 5});

        useEffect(() => {
            const containerInstance = container.current;
            const content = text.split('');
            let animation;

            const renderOutput = () => {
                const characterMap = output.current.map(item => {
                    return `<span class="${styles[item.type]}">${item.value}</span>`;
                });

                containerInstance.innerHTML = characterMap.join('');
            };

            const unsubscribeSpring = decoderSpring.onChange(value => {
                output.current = shuffle(content, output.current, value);
                renderOutput();
            });

            const startSpring = async () => {
                await delay(startDelay);
                decoderSpring.set(content.length);
            };

            if (start && !animation && !reduceMotion) {
                startSpring();
            }

            if (reduceMotion) {
                output.current = content.map((value, index) => ({
                    type: CharType.Value,
                    value: content[index],
                }));
                renderOutput();
            }

            return () => {
                unsubscribeSpring?.();
            };
        }, [decoderSpring, reduceMotion, start, startDelay, text]);

        return (
            <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container}/>
      </span>
        );
    }
);
